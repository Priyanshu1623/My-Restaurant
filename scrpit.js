 document.addEventListener("DOMContentLoaded", function() {
            // Navbar Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) navbar.classList.add('scrolled');
                else navbar.classList.remove('scrolled');
            });

            // Modal Setup
            const modalOverlay = document.getElementById('modalOverlay');
            const openModalBtns = document.querySelectorAll('.openModalTrigger'); 
            const closeModalBtn = document.getElementById('closeModalBtn');
            const doneBtn = document.getElementById('doneBtn');
            const formView = document.getElementById('formView');
            const confirmationView = document.getElementById('confirmationView');
            const reservationForm = document.getElementById('reservationForm');
            
            const summaryName = document.getElementById('summaryName');
            const summaryDateTime = document.getElementById('summaryDateTime');
            const summaryGuests = document.getElementById('summaryGuests');

            function openModal() { modalOverlay.classList.add('active'); }
            function closeModal() {
                modalOverlay.classList.remove('active');
                setTimeout(() => {
                    formView.style.display = 'block';
                    confirmationView.classList.remove('active');
                    reservationForm.reset();
                }, 300);
            }

            // Bind click to all Reserve Buttons
            openModalBtns.forEach(btn => {
                btn.addEventListener('click', openModal);
            });

            closeModalBtn.addEventListener('click', closeModal);
            doneBtn.addEventListener('click', closeModal);
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) closeModal();
            });

            // Form Submit Action
            reservationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                summaryName.textContent = document.getElementById('guestName').value;
                summaryDateTime.textContent = `${document.getElementById('guestDate').value} at ${document.getElementById('guestTime').value}`;
                summaryGuests.textContent = document.getElementById('guestCount').value;
                
                formView.style.display = 'none';
                confirmationView.classList.add('active');
            });
        });