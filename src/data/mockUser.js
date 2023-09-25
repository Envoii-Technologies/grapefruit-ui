export default {
    isAuthenticated: true,
    tenant: 'acme',
    userData: {
        id: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
        username: 'max.mustermann',
        email: 'max@acme.com',
        emailVerified: false,
        attributes: {
            firstname: 'Max',
            lastname: 'Mustermann',
            personalId: '12345678',
            jobtitle: 'test-user',
        },
        roles: [
            "app_admin",
            "app_user"
        ]
    },
};
