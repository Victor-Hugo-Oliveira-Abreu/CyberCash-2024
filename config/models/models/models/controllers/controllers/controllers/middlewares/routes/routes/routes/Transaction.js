import React, { useState } from 'react';
import axios from 'axios';

function Transaction() {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('deposit');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('auth-token');
            await axios.post(`/api/transactions/${type}`, { amount: Number(amount) }, {
                headers: { 'auth-token': token }
            });
            window.location = '/account';
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <label>Type:</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="deposit">Deposit</option>
                    <option value="withdrawal">Withdrawal</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Transaction;
