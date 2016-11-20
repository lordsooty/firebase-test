import jwtDecode from 'jwt-decode';

const authHelper = {
    isAuthenticated: () => {
        const token = localStorage.getItem('auth-token');
        if (token && token.split('.').length === 3) {
            const expiryDate = jwtDecode(token).exp;
            if (expiryDate < Date.now() / 1000) {
                localStorage.removeItem('auth-token');
            } else {
                return true;
            }
        }
        return false;
    },
    getUserDetails: (user) => {
        if (user) {
            return {
                username: user.username,
                title: user.title,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                dobDay: user.dateOfBirth ? user.dateOfBirth.substring(6, 8) : null,
                dobMonth: user.dateOfBirth ? user.dateOfBirth.substring(4, 6) : null,
                dobYear: user.dateOfBirth ? user.dateOfBirth.substring(0, 4) : null,
                paymentIds: user.ids,
                edocsConsent: user.edocsConsent,
                marketingConsent: user.marketingConsent
            };
        }
        return {};
    }
};

export default authHelper;
