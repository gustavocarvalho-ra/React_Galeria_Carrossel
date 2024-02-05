export function Galeria(props){
  return 
  <div className="slider">
    <li className="item" style={background-image}>{props.img}
      <div>
        <li className="title">{props.title}</li>
        <p className="description">{props.description}</p>
        <p>{props.descricao}</p>
      </div>
    </li>
  </div>
}



/* <ul class='slider'>
      <li class='item' style="background-image: url('https://www.pixel4k.com/wp-content/uploads/2018/11/len-kagamine-rin-kagamine-vocaloid_1541974488.jpg.webp')">
        <div class="content">
          <h2 class="title">FFFFFFFFFFFFFFFFFFFF</h2>
          <p class="description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </p>
          <button>Ler mais</button>
        </div>
      </li> */