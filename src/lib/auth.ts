import { supabase } from './supabaseClient';

interface RegisterFormData {
	email: string;
	username: string;
	password: string;
	confirmPassword: string;
}

export interface RegisterReturn {
	error: string | undefined;
	status: number;
	data: string | undefined;
}

export async function registerUser({
	email,
	username,
	password,
	confirmPassword
}: RegisterFormData) {
	// TODO: ADD REGEX CHECK FOR ILLEGAL CHARACTERS

	if (!email || !username || !password)
		return { error: 'Fill out all fields', status: 401, data: undefined };

	if (username.length <= 2)
		return { error: 'Username must be at least 3 characters', status: 401, data: undefined };

	if (password !== confirmPassword)
		return { error: 'Passwords dont match', status: 401, data: undefined };

	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				username
			}
		}
	});
	if (error) {
		return { error: error.message, status: error.status, data: undefined };
	}
	return { error: undefined, status: 200, data };
}

export async function loginUser(email: string, password: string) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});
	if (error) {
		return { error: error.message, status: error.status, data: undefined };
	}
	return { error: undefined, status: 200, data };
}
