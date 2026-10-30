const btnLigar = document.getElementById('btnLigar');
const video = document.getElementById('videoElement');

btnLigar.addEventListener('click', async () => {

try {

const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
});

video.srcObject = stream;

} catch(erro){
    alert("Erro ao acessar a câmera: " + erro.message);
}

}
)