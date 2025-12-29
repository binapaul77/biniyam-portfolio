        // Select the button and the icon inside it
        const toggleButton = document.getElementById('theme-toggle');
        const icon = toggleButton.querySelector('i');
        const htmlElement = document.documentElement;

        // Function to set the theme
        function setTheme(theme) {
            htmlElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme);
            
            // Change Icon based on theme
            if (theme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }

        // Check Local Storage or System Preference on Load
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme(systemPrefersDark ? 'dark' : 'light');
        }

        // Event Listener for Button Click
        toggleButton.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });