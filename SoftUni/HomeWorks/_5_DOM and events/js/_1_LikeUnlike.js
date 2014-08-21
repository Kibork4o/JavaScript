function lButtonClick(e) {
    switch(e.target.className){
        case 'likeButton':
            e.target.className='unLikeButton';
            e.target.innerHTML='Unlike';
            break;
        case 'unLikeButton':
            e.target.className='likeButton';
            e.target.innerHTML='Like';
            break;
    }
}
function doClick(event) {
    addEventListener('click', function(){lButtonClick(event)});
}