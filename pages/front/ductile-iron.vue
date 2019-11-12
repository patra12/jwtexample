<template>
  <section class="productDetails">
    <div class="container pt-5 pb-0">
      <div class="card">
        <div class="row">
          <aside class="col-sm-6 border-right">
            <article class="gallery-wrap">
              <div class="img-big-wrap">
                <a href="#">
                  <img src="../../assets/images/dracuta-iron.png" alt />
                </a>
              </div>
              <!-- slider-product.// -->
            </article>
            <!-- gallery-wrap .end// -->
          </aside>
          <aside class="col-sm-6">
            <article class="card-body p-5">
              <h1 class="price h1 text-themeColor text-center">DUCTILE IRON</h1>

              <p
                class="price-detail-wrap"
              >The AVONA Ductile Iron Blade is the most cost effective solution to cutting ductile iron pipe versus a traditional abrasive blade.</p>
              <h3 class="price h3 text-themeColor text-center">FEATURES & BENEFITAS</h3>
              <!-- price-detail-wrap .// -->
              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Unique Segment</span>
                </dt>
                <dd>
                  <p>Engineered 5mm segment which provides lightning fast cutting on Ductile Iron Pipe.</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Electroplated Side Coating</span>
                </dt>
                <dd>
                  <p>The blade has a special silica based side protective coating used to deburr the pipe while cutting.</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Cost Effective Solution</span>
                </dt>
                <dd>
                  <p>This blade will outlast 60-80 traditional abrasive blades while never shrinking, delivering a consistent depth of cut. It will cut 3x as fast and save time changingabrasive blades on the saw.</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Applications</span>
                </dt>
                <dd>
                  <p>Available in 14” & 16” primarily used for Ductile Iron Pipe.</p>
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
      <a href="https://shrinkly.net/Bt" target="_balnk">
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