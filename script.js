document.addEventListener('DOMContentLoaded', () => {
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');
    const formLogin = document.getElementById('form-login');
    const formSignup = document.getElementById('form-signup');
    const formTitle = document.getElementById('form-title');
    const formDescription = document.getElementById('form-description');

    const activeTabClasses = ['bg-white', 'dark:bg-slate-700', 'text-slate-900', 'dark:text-white', 'shadow-sm', 'ring-1', 'ring-slate-200', 'dark:ring-slate-600'];
    const inactiveTabClasses = ['text-slate-500', 'dark:text-slate-400', 'hover:text-slate-700', 'dark:hover:text-slate-200'];

    const updateTabs = (activeTab, inactiveTab) => {
        activeTab.classList.add(...activeTabClasses);
        activeTab.classList.remove(...inactiveTabClasses);

        inactiveTab.classList.remove(...activeTabClasses);
        inactiveTab.classList.add(...inactiveTabClasses);
    };

    // Tab Switching Logic
    tabLogin.addEventListener('click', () => {
        formLogin.classList.remove('hidden');
        formSignup.classList.add('hidden');

        updateTabs(tabLogin, tabSignup);

        formTitle.textContent = "Welcome back";
        formDescription.textContent = "Enter your credentials to access your library account";
    });

    tabSignup.addEventListener('click', () => {
        formLogin.classList.add('hidden');
        formSignup.classList.remove('hidden');

        updateTabs(tabSignup, tabLogin);

        formTitle.textContent = "Join the Library";
        formDescription.textContent = "Create an account to start your journey into knowledge";
    });

    // Password Visibility Toggle
    document.querySelectorAll('.password-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.parentElement.querySelector('.password-input');
            const icon = button.querySelector('.material-symbols-outlined');

            if (input.type === 'password') {
                input.type = 'text';
                icon.textContent = 'visibility_off';
            } else {
                input.type = 'password';
                icon.textContent = 'visibility';
            }
        });
    });

    // Mock Form Submission
    [formLogin, formSignup].forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            if (data.password) data.password = '********';

            console.log(`Form submitted (${form.id}):`, data);

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span> Processing...';

            setTimeout(() => {
                alert(`${form.id === 'form-login' ? 'Login' : 'Registration'} successful!`);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                form.reset();
            }, 1500);
        });
    });
});
