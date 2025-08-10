// Centralized configuration for the EasyTicket backend
export const config = {
    jwtSecret: process.env.JWT_SECRET || 'changeme',
    saltRounds: Number(process.env.SALT_ROUNDS) || 10,
    // Add more config as needed
};
