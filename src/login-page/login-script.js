const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.querySelector('#login-btn');

function setUser() {


    if (username.value === "" || username.value.length < 3 || username.value.length > 12 || password.value === "" || password.value.length < 6) {

        var toastMixin = Swal.mixin({
            toast: true,
            icon: 'success',
            title: 'General Title',
            animation: false,
            position: 'top-right',
            showConfirmButton: false,
            timer: 3000,
            iconColor: 'white',
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        toastMixin.fire({
            position: 'bottom-start',
            title: 'لطفا فرم را به درستی کامل کنید!',
            icon: 'error'
        });


        return;
    }
    else {

        fetch('https://bit-digit-default-rtdb.firebaseio.com/users.json')
            .then(response => response.json())
            .then(data => {

                const users = Object.entries(data);

                users.map((user => {

                    if (username.value === user[1].username && password.value === user[1].password) {

                        var toastMixin = Swal.mixin({
                            toast: true,
                            icon: 'success',
                            title: 'General Title',
                            animation: false,
                            position: 'top-right',
                            showConfirmButton: false,
                            timer: 3000,
                            iconColor: 'white',
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        });

                        Swal.fire({
                            toast: true,
                            position: 'bottom-start',
                            icon: 'success',
                            title: 'به صفحه اصلی منتقل میشوید.',
                            animation: false,
                            showConfirmButton: false,
                            timer: 1000,
                            iconColor: 'white',
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        }).then(okay => {
                            if (okay) {
                                window.location.assign("../../src/main-page/index.html");
                            }
                        })
                    }
                    else if (username.value !== user[1].username && password.value !== user[1].password) {

                        var toastMixin = Swal.mixin({
                            toast: true,
                            icon: 'success',
                            title: 'General Title',
                            animation: false,
                            position: 'top-right',
                            showConfirmButton: false,
                            timer: 3000,
                            iconColor: 'white',
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        });

                        toastMixin.fire({
                            position: 'bottom-start',
                            title: 'کاربری با این مشخصات ثبت نشده!',
                            icon: 'error'
                        });

                    }

                }))


            })
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    setUser();
});

////////////////////////////////////////////////////////////////////////////////

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '') {
        setError(username, 'درج نام کاربری الزامی است');
    } else if (username.value.length < 3) {
        setError(username, 'نام کاربری باید حداقل شامل سه حرف باشد');
    } else if (username.value.length > 12) {
        setError(username, 'نام کاربری باید حداکثر شامل دوازده حرف باشد');
    } else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'درج گذرواژه الزامی است');
    } else if (passwordValue.length < 6) {
        setError(password, 'گذرواژه باید شامل حداقل شش حرف باشد')
    } else {
        setSuccess(password);
    }

};

const validateUsername = () => {
    const usernameValue = username.value.trim();

    if (usernameValue === '') {
        setError(username, 'درج نام کاربری الزامی است');
    } else if (username.value.length < 3) {
        setError(username, 'نام کاربری باید حداقل شامل سه حرف باشد');
    } else if (username.value.length > 12) {
        setError(username, 'نام کاربری باید حداکثر شامل دوازده حرف باشد');
    }
    else {
        setSuccess(username);
    }
}

const validatePassword = () => {
    const passwordValue = password.value.trim();

    if (passwordValue === '') {
        setError(password, 'درج گذرواژه الزامی است');
    } else if (passwordValue.length < 6) {
        setError(password, 'گذرواژه باید شامل حداقل شش حرف باشد')
    } else {
        setSuccess(password);
    }
}

///////////////////////////////////////////////////////////////////////

var goToSignupPage = document.querySelector(".go-to-signup-page");

goToSignupPage.addEventListener('click', function () {
    window.location.assign("../../src/signup-page/signup-page.html");
})