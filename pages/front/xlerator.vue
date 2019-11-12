<template>
  <section class="productDetails">
    <div class="container pt-5 pb-0">
      <div class="card">
        <div class="row">
          <aside class="col-sm-6 border-right">
            <article class="gallery-wrap">
              <div class="img-big-wrap">
                <a href="#">
                  <img src="../../assets/images/xlerator.png" alt />
                </a>
              </div>
              <!-- slider-product.// -->
            </article>
            <!-- gallery-wrap .end// -->
          </aside>
          <aside class="col-sm-6">
            <article class="card-body p-5">
              <h1 class="price h1 text-themeColor text-center">XLERATOR</h1>

              <p
                class="price-detail-wrap"
              >The Xlerator is our most popular blade designed for maximum performance on a variety of materials.</p>
              <h3 class="price h3 text-themeColor text-center">FEATURES & BENEFITAS</h3>
              <!-- price-detail-wrap .// -->
              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">10mm Alternating Segments</span>
                </dt>
                <dd>
                  <p>Combination of jumbo segmented and segmented turbo delivers lightning fast cutting. Placing 2 segments per landing insures less drag on the blade.</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Diamond Matrix</span>
                </dt>
                <dd>
                  <p>Unique segment manufacturing process of alternating bonds to deliver ultra longlife and lower cost per cut.</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Wide Gullet & Cooling Holes</span>
                </dt>
                <dd>
                  <p>Wide gullet design in tandem with cooling holes keeps the blade cutting on thehardest of materials.</p>
                </dd>
              </dl>

              <dl class="item-property">
                <dt>
                  <span style="border-bottom:1px solid black;">Applications</span>
                </dt>
                <dd>
                  <p>Available in 14” primarily used for Concrete, Stone and other General PurposeMaterials.</p>
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
      <a href="https://bit.ly/2NA1OzQ" target="blank">
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