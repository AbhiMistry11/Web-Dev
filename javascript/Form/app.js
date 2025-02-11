
        document.getElementById('submit').addEventListener('click', function () {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').id : 'Not selected';
            const college = document.getElementById('college').value;
            const course = document.getElementById('course').value;

            const result = `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>College Name:</strong> ${college}</p>
                <p><strong>Course:</strong> ${course}</p>
            `;
            document.getElementById('result').innerHTML = result;

            document.querySelector('.container').style.display = 'none';
            document.getElementById('output').classList.remove('hidden');
        });
