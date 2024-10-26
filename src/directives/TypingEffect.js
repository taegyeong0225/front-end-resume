export default {
    mounted(el, binding) {
        let text = binding.value;
        let delay = el.dataset.delay;
        let index = 0;
        el.innerHTML = '';

        function typeWriter() {
            if (index < text.length) {
                el.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, delay);
            }
        }

        typeWriter();
    }
};