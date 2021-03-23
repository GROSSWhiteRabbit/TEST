const convas = document.getElementById('canvas');

var ctx = document.getElementById('canvas').getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 400, 200);
const img = new Image();
img.src = 'https://i.pinimg.com/236x/00/c5/34/00c534c781c2ea7a2828206902d208cf.jpg';
img.onload = ()=>{
    convas.addEventListener('mousemove', (e)=>{
        ctx.clearRect(0, 0, 400, 200)


            const pattern = ctx.createPattern(img, 'repeat')
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, 400, 200);
        
            const radgrad = ctx.createRadialGradient(e.offsetX, e.offsetY, 10, 200, 100, 250);
            radgrad.addColorStop(0, 'rgba(0,0,0,0.1)');
            radgrad.addColorStop(0.3, 'black');
            ctx.fillStyle = radgrad;
            ctx.fillRect(0, 0, 400, 200);

    })
}
