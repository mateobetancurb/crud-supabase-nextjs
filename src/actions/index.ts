"use server";

export async function getAllTodos() {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/todos?select=*`,
			{
				headers: {
					apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
				},
				cache: "no-cache",
			}
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function createTodo(message: string, assing_to: string) {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/todos`,
			{
				method: "POST",
				headers: {
					apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
					"Content-Type": "application/json",
					Prefer: "return=null",
				},
				body: JSON.stringify({
					message,
					assing_to,
				}),
			}
		);
	} catch (error) {
		console.log(error);
	}
}
