# ✅ BEST PRACTICES FOR ENVIRONMENT VARIABLES (.env files)

1. 📁 NEVER COMMIT `.env` FILES TO VERSION CONTROL
   - Add `.env*` to your `.gitignore`.
   - Use `.env.example` to show the required keys for collaborators.

2. 🔒 TREAT `.env` DATA AS SENSITIVE
   - Use a secret manager (like AWS Secrets Manager, Vault, or 1Password CLI) in production.
   - Avoid logging secrets accidentally.

3. 🧪 VALIDATE VARIABLES AT STARTUP
   - Use libraries like `envalid` or `joi` to check that all required keys exist.

4. 📦 USE `dotenv` ONLY IN NON-PRODUCTION
   - In production, inject variables through cloud environments or container engines.
   - Use `dotenv` with caution in Dockerized deployments.

5. 🧬 KEEP ENVIRONMENTS SEPARATE
   - Use `.env.development`, `.env.test`, and `.env.production` to isolate settings.
   - Don’t reuse credentials across environments.
