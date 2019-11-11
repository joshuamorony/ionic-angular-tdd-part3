import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ProductsService } from "../services/products.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"]
})
export class ProductPage implements OnInit {
  constructor(public navCtrl: NavController, public productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.load();
  }

  launchWishlist() {
    this.navCtrl.navigateForward("wishlist");
  }
}
