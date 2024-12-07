export const config = {
    port: process.env.PORT || 3100,
    supportedPostCount: 15,
    databaseUrl: process.env.MONGODB_URL || 'mongodb+srv://techweb:dNhO0lOvE79jys2h@cluster0.ooees.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    JwtSecret: 'my-32-character-ultra-secure-and-ultra-long-secret'
};