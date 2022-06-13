// Contact form submission
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var form = document.getElementById('contact-us-form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
           if (form.checkValidity() === false) {
                event.stopPropagation();
                form.classList.add('was-validated');
            }
            else {
                 postData();
                form.classList.remove('was-validated');
            }
        }, false);
    }, false);
})();
function postData() {
    const formURL = "https://script.google.com/macros/s/AKfycbzSNgYeMwrS_w6S2zMTDMMsPommCb-KtgnO3mI9q4ULTDztMb8/exec"
    // https://script.google.com/macros/s/AKfycbwpzDN5ngA2BM-yN2Cx_NbAPGAgy2BNeTtnk8vxLWXqGr7qBWs/exec
    const form = document.getElementById('contact-us-form');
    $("#btn-send")
    .text("Sending . . .")
    .attr("disabled", true); 
    fetch(formURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            form.reset();
            $("#btn-send")
            .text("Send Message")
            .attr("disabled", true); 
           alertify.alert(title = "", 'Thanks for filling up the form.<br/> One of our team members will be in contact soon.').set('onok', function (closeEvent) { ; })
        })
        .catch(error => console.error('Error!', error.message))
}

// (function () {
//     'use strict';
//     window.addEventListener('load', function () {
//         var form = document.getElementById('contact_form');
//         console.log(form);
//         form.addEventListener('submit', function (event) {
//             event.preventDefault();
//             if (form.checkValidity() === false) {
//                 event.stopPropagation();
//                 form.classList.add('was-validated');
//             }
//             else {
//                 // event.preventDefault();  
//                 console.log('data')
//                 postData();
//                 form.classList.remove('was-validated');
//                 // event.stopPropagation();  
//             }
//         }, false);
//     }, false);
// })();
// function postData() {
//     const formURL = "https://script.google.com/macros/s/AKfycbyxu4wruYdZmQyl_bBOjX1S5xKX1ojbr2q5gyB7pwhISbB4T1c/exec"
//     const form = document.getElementById('contact_form');
//     console.log(new FormData(form));
//     fetch(formURL, { method: 'POST', body: new FormData(form) })
//         .then(response => {
//             form.reset();
//             console.log('Success!', response)
//             // alertify.alert(title = "", "Thanks for filling up the form . One of our team members will be in contact soon");
//             // alertify
//             // .alert(title = "",`Thanks for filling up the form . One of our team members will be in contact soon.`, function(){
//             // });
//             alertify.alert(title = "", 'Thanks for getting in touch!<br/> We will get back to you shortly.').set('onok', function (closeEvent) { ; })
//         })
//         .catch(error => console.error('Error!', error.message))
// }