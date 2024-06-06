import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Account() {
    const [account, setAccount] = useState({ balance: 0 });

    useEffect(() => {
        const fetchAccount = async () => {
            try {
                const token = localStorage.getItem('auth-token');
                const res = await axios.get('/api/users/account', {
                    headers: { 'auth-token': token }
                });
                setAccount(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchAccount();
    }, []);

    return (
        <div>
            <h2>Account</h2>
            <p>Balance: ${account.balance}</p>
        </div>
    );
}

export default Account;
