function menushow()
{
    let mwnuMobile = document.querySelector('.mobile-menu');
    if (mwnuMobile.classList.contains('open'))
        {
            mwnuMobile.classList.remove('open');
        }
    else
        {
            mwnuMobile.classList.add('open');
        }
}