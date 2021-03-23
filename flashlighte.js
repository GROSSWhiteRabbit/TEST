const convas = document.getElementById('canvas');

var ctx = document.getElementById('canvas').getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 400, 200);


const img = new Image();
img.src = 'https://i.pinimg.com/236x/00/c5/34/00c534c781c2ea7a2828206902d208cf.jpg';

img.onload = ()=>{
    convas.addEventListener('mousemove', (e)=>{
        ctx.clearRect(0, 0, 400, 200)
            const x = e.offsetX;
            const y = e.offsetY;

            const pattern = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, 400, 200);


            
            ctx.shadowOffsetX = (155-x)/8;
            ctx.shadowOffsetY = (80-y)/8;
            ctx.shadowBlur = 5;
            ctx.shadowColor = 'rgba(0, 0, 0, 1)';

            ctx.fillStyle = '#606060';
            ctx.strokeStyle = 'rgba(40, 40, 40, 1)';
            ctx.lineWidth = 3;
            ctx.strokeRect(105,55,100,50);
            ctx.fillRect(105,55,100,50);


            ctx.shadowColor = 'rgba(0, 0, 0, 0)';


            const radgrad = ctx.createRadialGradient(x, y, 10, 200, 100, 250);
            radgrad.addColorStop(0, 'rgba(0,0,0,0.1)');
            radgrad.addColorStop(0.3, 'black');
            ctx.fillStyle = radgrad;
            ctx.fillRect(0, 0, 400, 200);

    })
}
