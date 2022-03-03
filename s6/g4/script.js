$(() => {
    $('#puls').on('click', () => {
        $('#barra').animate({ width: '1000px' }, {
            duration: 10000,
            easing: 'linear',
            step: function (x) {
                $('#text').text(Math.round(x * 100 / 1000) + '%')
            }
        })
    })
    $('#stop').click(() => {
        $('#barra').stop()
    })
    $('#stacca').click(() => {
        $('#barra').css({ width: '' })
    })
})