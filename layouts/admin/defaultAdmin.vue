<template>
  <v-app light>
    <v-navigation-drawer
      class="blackleft"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="white darken-2">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              class="white--text text--lighten-1"
              v-text="item.title"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="whiteC" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>

      <v-spacer />
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>-->
    </v-app-bar>
    <v-content class="bg">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/admin/dashboard"
        },
        {
          icon: "mdi-package-variant-closed",
          title: "Product",
          to: "/admin/product/productlist"
        },
        {
          icon: "mdi-wrench",
          title: "Settings",
          to: "/admin/settings"
        }
        // {
        //   icon: "mdi-file-pdf-box",
        //   title: "pdf",
        //   to: "/admin/pdf"
        // }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
<style scoped>
.bg {
  background: #e2e0e0;
}
.blackleft {
  background: #333;
}
.v-list .v-list-item--active {
  color: inherit;
  background: #60bb23;
}
.v-list.v-sheet.v-sheet--tile.theme--light a:hover {
  text-decoration: none;
}
.v-list.v-sheet.v-sheet--tile.theme--light a {
  font-weight: 600;
}
</style>
