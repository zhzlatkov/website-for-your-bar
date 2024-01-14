async function registration() {
    try {
        if (process.argv.length < 5) {
            return console.log('Please enter your correct email and password.');
        }

        const name = process.argv[2];
        const email = process.argv[3];
        const password = process.argv[4];

        if (name === '' || email === '' || password === '') {
            return console.error('Please fill in all required information.');
        }

        const response = await fetch(
            'https://website-for-bars.vercel.app/api/registration',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            }
        );

        if (response.status !== 200) {
            return console.error(response.statusText);
        }

        const userInfo = await response.json();
        console.log('Congratulations you just created a new user:', userInfo);
    } catch (err) {
        console.error(err);
    }
}

registration();
