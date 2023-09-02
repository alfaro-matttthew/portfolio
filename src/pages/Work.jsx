export default function Work() {

  const rowHeight = {
    height: "200px"
  }

  const bgImg1 = {
    backgroundImage: "url(src/assets/images/josep-martins-l3-erg8nPRU-unsplash.jpg)",
    backgroundSize: 'cover',
  };

  const bgImg2 = {
    backgroundImage: "url(src/assets/images/milad-fakurian-DjjaZybYx4I-unsplash.jpg)",
    backgroundSize: 'cover',
  };

  const bgImg3 = {
    backgroundImage: "url(src/assets/images/milad-fakurian-ICTjWYzpoc0-unsplash.jpg)",
    backgroundSize: 'cover',
  };

  const bgImg4 = {
    backgroundImage: "url(src/assets/images/orfeas-green-G5A5ZNjS2tE-unsplash.jpg)",
    backgroundSize: 'cover',
  };

  const bgImg5 = {
    backgroundImage: "url(src/assets/images/wynand-van-poortvliet-XWFTtHI7kYA-unsplash.jpg)",
    backgroundSize: 'cover',
  };


  return (
    <div>
<div class="border container">
    {/* project one */}
    <div 
      class="border mb-5 bg-img row justify-content-start"
      style={ rowHeight }
    >
      <div class="border col-2">
        P1: Title
      </div>
      <div 
        class="border col-5"
        style={ bgImg1 }
      >
        P1: Image
      </div>
    </div>
    {/* project two */}
    <div 
      class="border mb-5 row justify-content-start"
      style={rowHeight}
    > 
      <div 
        class="border col-5"
        style={ bgImg2 }
      >
      </div>
      <div class="border col-2">
        P2: Title
      </div>
    </div>
    {/* project three */}
    <div 
      class="border mb-5 row justify-content-end"
      style={rowHeight}
    > 
      <div 
        class="border col-5"
        style={ bgImg3 }
      >
      </div>
      <div class="border col-3">
        P3: Title
      </div>
    </div>
    {/* project four */}
    <div 
      class="border mb-5 row justify-content-end"
      style={rowHeight}
    >
      <div 
        class="border col-5"
        style={ bgImg4 }
      >
      </div>
      <div class="border col-5">
        P4: Image
      </div>
    </div>
    {/* project five */}
    <div 
      class="border mb-5 row justify-content-center"
      style={rowHeight}
    >
      <div 
        class="border col-5"
        style={ bgImg5 }
      >
      </div>
      <div class="border col-2">
        P5: Title
      </div>
    </div>

  </div>
</div>
  );
}
