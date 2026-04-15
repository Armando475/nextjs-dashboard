const REQUIRED_ENV_VARS = [
  'NEW_SUPABASE_ANON_KEY',
  'NEXT_PUBLIC_NEW_SUPABASE_PUBLISHABLE_KEY',
  'NEXT_PUBLIC_NEW_SUPABASE_URL',
  'NEW_POSTGRES_DATABASE',
  'NEW_POSTGRES_HOST',
  'NEW_POSTGRES_PASSWORD',
  'NEW_POSTGRES_PRISMA_URL',
  'NEW_POSTGRES_URL',
] as const;

function getRequiredEnv(name: (typeof REQUIRED_ENV_VARS)[number]): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const env = {
  NEW_SUPABASE_ANON_KEY: getRequiredEnv('NEW_SUPABASE_ANON_KEY'),
  NEXT_PUBLIC_NEW_SUPABASE_PUBLISHABLE_KEY: getRequiredEnv('NEXT_PUBLIC_NEW_SUPABASE_PUBLISHABLE_KEY'),
  NEXT_PUBLIC_NEW_SUPABASE_URL: getRequiredEnv('NEXT_PUBLIC_NEW_SUPABASE_URL'),
  NEW_POSTGRES_DATABASE: getRequiredEnv('NEW_POSTGRES_DATABASE'),
  NEW_POSTGRES_HOST: getRequiredEnv('NEW_POSTGRES_HOST'),
  NEW_POSTGRES_PASSWORD: getRequiredEnv('NEW_POSTGRES_PASSWORD'),
  NEW_POSTGRES_PRISMA_URL: getRequiredEnv('NEW_POSTGRES_PRISMA_URL'),
  NEW_POSTGRES_URL: getRequiredEnv('NEW_POSTGRES_URL'),
};
