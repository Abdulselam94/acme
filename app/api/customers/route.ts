import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, image_url } = body;

    if (!name || !email) {
      return Response.json({ error: 'Missing name or email' }, { status: 400 });
    }

    const inserted = await sql`
      INSERT INTO customers (name, email, image_url)
      VALUES (${name}, ${email}, ${image_url})
      RETURNING id
    `;

    return Response.json({ id: inserted[0].id, message: 'Customer created' });
  } catch (error) {
    console.error('Customers POST error', error);
    return Response.json({ error: 'Failed to create customer' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (!id) return Response.json({ error: 'Missing id' }, { status: 400 });

    await sql`DELETE FROM customers WHERE id = ${id}`;
    return Response.json({ ok: true, message: 'Customer deleted' });
  } catch (error) {
    console.error('Customers DELETE error', error);
    return Response.json({ error: 'Failed to delete customer' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, name, email, image_url } = body;

    if (!id || !name || !email) {
      return Response.json({ error: 'Missing fields' }, { status: 400 });
    }

    const updated = await sql`
      UPDATE customers
      SET name = ${name}, email = ${email}, image_url = ${image_url}
      WHERE id = ${id}
      RETURNING id
    `;

    if (!updated || updated.length === 0) {
      return Response.json({ error: 'Not found' }, { status: 404 });
    }

    return Response.json({ id: updated[0].id, message: 'Customer updated' });
  } catch (error) {
    console.error('Customers PUT error', error);
    return Response.json({ error: 'Failed to update customer' }, { status: 500 });
  }
}
