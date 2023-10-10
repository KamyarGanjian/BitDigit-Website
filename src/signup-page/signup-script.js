const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-confirmation');
const signupBtn = document.querySelector('#signup-btn');

function setUser() {


    if (!isValidEmail(email.value) || email.value === "" || username.value === "" || username.value.length < 3 || username.value.length > 12 || password.value === "" || password.value.length < 6 || password.value !== password2.value || password2.value === "") {

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

        let userInfo = {
            username: username.value,
            email: email.value,
            password: password.value
        }

        fetch("https://bit-digit-default-rtdb.firebaseio.com/users.json", {
            method: "post",
            body: JSON.stringify(userInfo)
        }).then(response => console.log(response))

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
            title: 'با موفقیت ثبت نام شدید.',
            animation: false,
            showConfirmButton: false,
            timer: 1000000,
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

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'درج نام کاربری الزامی است');
    } else if (username.value.length < 3) {
        setError(username, 'نام کاربری باید حداقل شامل سه حرف باشد');
    } else if (username.value.length > 12) {
        setError(username, 'نام کاربری باید حداکثر شامل دوازده حرف باشد');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'درج ایمیل الزامی است');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'آدرس ایمیل معتبر نمیباشد');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'درج گذرواژه الزامی است');
    } else if (passwordValue.length < 6) {
        setError(password, 'گذرواژه باید شامل حداقل شش حرف باشد')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'لطفا گذرواژه خودرا تایید کنید');
    } else if (password2Value !== passwordValue) {
        setError(password2, "گذرواژه مطابقت ندارد");
    } else {
        setSuccess(password2);
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

const validateEmail = () => {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(email, 'درج ایمیل الزامی است');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'آدرس ایمیل معتبر نمیباشد');
    } else {
        setSuccess(email);
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

const validatePassword2 = () => {
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (password2Value === '') {
        setError(password2, 'لطفا گذرواژه خودرا تایید کنید');
    } else if (password2Value !== passwordValue) {
        setError(password2, "گذرواژه مطابقت ندارد");
    } else {
        setSuccess(password2);
    }
}

/////////////////////////////////////////////////////////////////////////////////

var goToLoginPage = document.querySelector(".go-to-login-page");

goToLoginPage.addEventListener('click', function () {
    window.location.assign("../../src/login-page/login-page.html");
})

/////////////////////////////////////////////////////////////////////////////////