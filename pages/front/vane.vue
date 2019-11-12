<template>
  <section class="productDetails">
    <div class="container pt-5 pb-0">
      <div class="card">
        <div class="row">
          <aside class="col-sm-6 border-right">
            <article class="gallery-wrap">
              <div class="img-big-wrap">
                <a href="#">
                  <img src="../../assets/images/vane.png" alt />
                </a>
              </div>
              <!-- slider-product.// -->
            </article>
            <!-- gallery-wrap .end// -->
          </aside>
          <aside class="col-sm-6">
            <article class="card-body p-5">
              <h1 class="price h1 text-themeColor text-center">VANE</h1>

              <p
                class="price-detail-wrap"
              >The Vane is our signature blade designed for the most demanding contractor who is looking for a blade that will deliver the lowest cost per cut on Cured Concrete and other General Purpose Materials. Revolutionary superabrasive technology makes this blade truly unique</p>
              <h3 class="price h3 text-themeColor text-center">FEATURES & BENEFITAS</h3>
              <!-- price-detail-wrap .// -->
              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">10mm Alternating Segments</span>
                </dt>
                <dd>
                  <p>Combination of Jumbo Segmented and segmented turbo delivers lightning fastcutting. Placing 2 segments per landing insures less drag on the blade.</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Diamond Matrix</span>
                </dt>
                <dd>
                  <p>One of the only blades on the market that utilizes revolutionary superabrasivetechnology instead of traditional diamonds.</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Wide Gullet & Cooling Holes</span>
                </dt>
                <dd>
                  <p>Wide Gullet & Cooling HolesWide gullet design in tandem with cooling holes keeps the blade cutting on thehardest of materials</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Applications</span>
                </dt>
                <dd>
                  <p>Available in 14”, 16”, 18”, 20” & 24” primarily used for Concrete, Stone and otherGeneral Purpose Materials.</p>
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
        href="https://www.dropbox.com/sh/nzdx9ei13u7l49k/AAA7NV_NG86v3PeBpuxn2wa1a?dl=0&preview=General+-+VANE.pdf"
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