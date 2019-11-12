<template>
  <section class="productDetails">
    <div class="container pt-5 pb-0">
      <div class="card">
        <div class="row">
          <aside class="col-sm-6 border-right">
            <article class="gallery-wrap">
              <div class="img-big-wrap">
                <a href="#">
                  <img src="../../assets/images/i-cut.png" alt />
                </a>
              </div>
              <!-- slider-product.// -->
            </article>
            <!-- gallery-wrap .end// -->
          </aside>
          <aside class="col-sm-6">
            <article class="card-body p-5">
              <h1 class="price h1 text-themeColor text-center">I - CUT</h1>

              <p
                class="price-detail-wrap"
              >The I-Cut Supreme Combination Blade guarantees to outperform any other blade for cutting Concrete, Asphalt or Ductile Pipe. This blade is the only blade you need on your truck, no matter what you are cutting.</p>
              <h3 class="price h3 text-themeColor text-center">FEATURES & BENEFITAS</h3>
              <!-- price-detail-wrap .// -->
              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">10mm Alternating Segments</span>
                </dt>
                <dd>
                  <p>Combination of segmented and segmented turbo delivers lightning fast cutting.Every other segment has a different bond to perform on any material.</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Diamond Matrix</span>
                </dt>
                <dd>
                  <p>The highest concentration of all our blades delivers extremely fast cutting and longlife on all materials.</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Core & Blade Design</span>
                </dt>
                <dd>
                  <p>Unique core design with cooling holes near the segments. Strategically placedtungsten kickers prevent undercutting on Asphalt or Green Concrete.</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Applications</span>
                </dt>
                <dd>
                  <p>Available in 14” for cutting multiple applications - Concrete, Asphalt, RCP, Ductileand Stone.</p>
                </dd>
              </dl>
              <!-- item-property-hor .// -->
            </article>
            <!-- card-body.// -->
          </aside>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>

      <div class="d-flex w-25 mx-auto"></div>
    </div>

    <div class="footer-pdf">
      <a
        href="https://www.dropbox.com/sh/nzdx9ei13u7l49k/AAA7NV_NG86v3PeBpuxn2wa1a?dl=0&preview=General+-+I+CUT.pdf"
        target="_blank"
      >
        Click
        <u>Here</u> to download flyer
      </a>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style scoped>
.img-big-wrap img {
  width: 100%;
}
.text-themeColor {
  color: #f05a25;
}
.card {
  -webkit-box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 33px -12px rgba(0, 0, 0, 0.75);
}
.product-more-desc {
  background: url(../../assets/images/bottom-banner.jpg) no-repeat;
  background-color: #d9d9d9;
  background-size: 100%;
  padding: 50px 0;
}
.footer-pdf {
  text-align: center;
  margin-bottom: 35px;
  margin-top: 20px;
}
.footer-pdf a {
  background: #f05a25;
  padding: 5px 15px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  -webkit-box-shadow: 0px 2px 19px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 19px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 19px -8px rgba(0, 0, 0, 0.75);
}
.footer-pdf a:hover {
  text-decoration: none;
}
</style>