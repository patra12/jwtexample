-- MySQL dump 10.13  Distrib 5.6.45, for Linux (x86_64)
--
-- Host: localhost    Database: heroku_733928f9843c014
-- ------------------------------------------------------
-- Server version	5.6.45-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `product_alias` varchar(255) DEFAULT NULL,
  `product_description` text,
  `feature_benefitas` varchar(255) DEFAULT NULL,
  `feature_description` text,
  `price` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `pdf_name` varchar(255) DEFAULT NULL,
  `meta_title` text,
  `meta_description` text,
  `meta_keywords` text,
  `status` enum('active','dactive') DEFAULT 'active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'AC / GC','ac-gc','<p>The AC/GC is our signature Asphalt Blade designed to perform in the most demanding aggregates while delivering the fastest cut on all types of abrasive materials.</p>','FEATURES & BENEFITS','<h6><strong><u>10mm Segments</u></strong></h6><p>Manufactured under high heat and low pressure creates a high performing segment on abrasive materials.</p><h6><strong><u>Undercut Protection</u></strong></h6><p>Strategically placed wedge segments will protect the blade from undercutting on Asphalt and Green Concrete.</p><h6><strong><u>Diamond Matrix</u></strong></h6><p>High diamond concentration delivers lightning fast cutting that never sacrifices life on all types of a<span style=\"color: rgb(34, 34, 34);\">brasive</span> material.</p><h6><strong><u>Applications</u></strong></h6><p>Available in 14\" primarily used for Asphalt and Green Concrete. May be used on High Speed Hand Held or Walk Behind Saws up to 20HP</p>','100','ag-ac.png','ac-gc.pdf','The AC/GC is our signature Asphalt Blade designed to perform in the most demanding aggregates while delivering the fastest cut on all types of abrasive materials.','The AC/GC is our signature Asphalt Blade designed to perform in the most demanding aggregates while delivering the fastest cut on all types of abrasive materials.','The AC/GC is our signature Asphalt Blade designed to perform in the most demanding aggregates while delivering the fastest cut on all types of abrasive materials.','active'),(2,'Blue Shark','blue-shark','<p>The Blue Shark is our most popular General Purpose Blade for the contractor who is looking for exceptional value and maximum performance on Hand Held Saws or Low Horsepower Walk Behind Saws.</p><p><br></p>','FEATURES & BENEFITS','<h6><strong><u>10mm Alternating Segments</u></strong></h6><p>Combination of segmented and segmented turbo segments delivers lightning fast cutting. Placing 2 segments per landing insures less drag on the blade.</p><h6><strong><u>High Concentration</u></strong></h6><p>Unique segment manufacturing process to insure maximum cutting performance.</p><h6><strong><u>Wide Gullet &amp; Cooling Holes</u></strong></h6><p>Wide gullet design in tandem with cooling holes keeps the blade cutting on the hardest of materials.</p><h6><strong><u>Applications</u></strong></h6><p>Available in 14” primarily used for General Purpose, Stone and Masonry.</p>','100','blue-shark.png','blue-shark.pdf','Our most popular General Purpose Blade for the contractor who is looking for exceptional value and maximum performance on Hand Held Saws or Low Horsepower Walk Behind Saw.','Our most popular General Purpose Blade for the contractor who is looking for exceptional value and maximum performance on Hand Held Saws or Low Horsepower Walk Behind Saw.','Our most popular General Purpose Blade for the contractor who is looking for exceptional value and maximum performance on Hand Held Saws or Low Horsepower Walk Behind Saw.','active'),(3,'Ductile Iron','ductile-iron','<p>The AVONA Ductile Iron Blade is the most cost effective solution to cutting ductile iron pipe versus a traditional abrasive blade.</p><p><br></p>','FEATURES & BENEFITS','<h6><strong><u>Unique Segment</u></strong></h6><p>Engineered 5mm segment which provides lightning fast cutting on Ductile Iron Pipe.</p><h6><strong><u>Electroplated Side Coating</u></strong></h6><p>The blade has a special silica based side protective coating used to deburr the pipe while cutting.</p><h6><strong><u>Cost Effective Solution</u></strong></h6><p>This blade will outlast 60-80 traditional abrasive blades while never shrinking, delivering a consistent depth of cut. It will cut 3x as fast and save time changing abrasive blades on the saw.</p><h6><strong><u>Applications</u></strong></h6><p>Available in 14” &amp; 16” primarily used for Ductile Iron Pipe.</p>','100','dracuta-iron.png','dracuta-iron.pdf','The AVONA Ductile Iron Blade is the most cost effective solution to cutting ductile iron pipe versus a traditional abrasive blade.','The AVONA Ductile Iron Blade is the most cost effective solution to cutting ductile iron pipe versus a traditional abrasive blade.','The AVONA Ductile Iron Blade is the most cost effective solution to cutting ductile iron pipe versus a traditional abrasive blade.','active'),(4,'I - CUT','i-cut','<p>The I-Cut Supreme Combination  Blade guarantees to outperform any other blade for cutting Concrete, Asphalt or Ductile Pipe. This blade is the only blade you need on your truck, no matter what you are cutting.</p><p><br></p>','FEATURES & BENEFITS','<h6><strong><u>10mm Alternating Segments</u></strong></h6><p>Combination of segmented and segmented turbo segments delivers lightning fast cutting. Every other segment has a different bond to perform on any material.</p><h6><strong><u>Diamond Matrix</u></strong></h6><p>The highest concentration of all our blades delivers extremely fast cutting and long life on all materials.</p><h6><strong><u>Core &amp; Blade Design</u></strong></h6><p>Unique core design with cooling holes near the segments. Strategically placed tungsten kickers prevent undercutting on Asphalt or Green Concrete.</p><h6><strong><u>Applications</u></strong></h6><p>Available in 14” for cutting multiple applications - Concrete, Asphalt, RCP, Ductile Iron and Stone.</p>','100','i-cut.png','i-cut.pdf','The I-Cut Supreme Combination Blade guarantees to outperform any other blade for cutting Concrete, Asphalt or Ductile Pipe. This blade is the only blade you need on your truck, no matter what you are cutting.','The I-Cut Supreme Combination','The I-Cut Supreme Combination','active'),(5,'Vane','vane','<p>The Vane is our signature blade designed for the most demanding contractor who is looking for a blade that will deliver the lowest cost per cut on Cured Concrete and other General Purpose materials. Revolutionary super abrasive technology makes this blade truly unique!</p><p><br></p>','FEATURES & BENEFITS','<h6><strong><u>10mm Alternating Segments</u></strong></h6><p>Combination of jumbo segments and segmented turbo segments delivers lightning fast cutting. Placing 2 segments per landing insures less drag on the blade.</p><h6><strong><u>Diamond Matrix</u></strong></h6><p>One of the only blades on the market that utilizes revolutionary super abrasive technology instead of traditional diamonds.</p><h6><strong><u>Wide Gullet &amp; Cooling Holes</u></strong></h6><p>Wide gullet design in tandem with cooling holes keeps the blade cutting on the hardest of materials.</p><h6><strong><u>Applications</u></strong></h6><p>Available in 14”, 16”, 18”, 20” &amp; 24” primarily used for Concrete, Stone and other General Purpose materials.</p><p><br></p>','100','vane.png','vane.pdf','The Vane is our signature blade designed for the most demanding contractor who is looking for a blade that will deliver the lowest cost per cut on Cured Concrete and other General Purpose Materials. Revolutionary superabrasive technology makes this blade truly unique','The Vane is our signature blade designed for the most demanding contractor ','The Vane is our signature blade designed for the most demanding contractor ','active'),(6,'Xlerator','xlerator','<p>The Xlerator is our most popular blade designed for maximum performance on a variety of materials.</p><p><br></p>','FEATURES & BENEFITS','<h6><strong><u>10mm Alternating Segments</u></strong></h6><p>Combination of jumbo segmented and segmented turbo segments delivers lightning fast cutting. Placing 2 segments per landing insures less drag on the blade.</p><h6><strong><u>Diamond Matrix</u></strong></h6><p>Unique segment manufacturing process of alternating bonds to deliver ultra long life and lowest cost per cut.</p><h6><strong><u>Wide Gullet &amp; Cooling Holes</u></strong></h6><p>Wide gullet design in tandem with cooling holes keeps the blade cutting on the hardest of materials.</p><h6><strong><u>Applications</u></strong></h6><p>Available in 14” primarily used for Concrete, Stone and other General Purpose materials.</p><p><br></p>','100','xlerator.png','xlerator.pdf','The Xlerator is our most popular blade designed for maximum performance on a variety of materials. ','The Xlerator is our most popular blade designed for maximum performance on a variety of materials.','The Xlerator is our most popular blade designed for maximum performance on a variety of materials.','active');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_phone` varchar(255) NOT NULL,
  `contact_telephone` varchar(255) NOT NULL,
  `contact_address` text NOT NULL,
  `copyrights` varchar(255) NOT NULL,
  `map_location` text,
  `dashboard_title` varchar(100) DEFAULT NULL,
  `dashboard_description` varchar(2500) DEFAULT NULL,
  `homepage_title` varchar(2000) DEFAULT NULL,
  `homepage_description` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES (1,'Sales@AvonaSupply.com','(877) 77-AVONA','(877) 77-AVONA','Sales@AvonaSupply.com','(877) 772-8662','(877) 772-8662','avona','copyrights © 2020','<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29486.736547968245!2d88.3407536!3d22.510107899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1574686957818!5m2!1sen!2sin\" width=\"1100\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>','WELCOME TO DASHBOARD','This is the description of dashboard','WELCOME','Avona Supply has been providing contractors with the highest quality products for the most demanding applications. Our product line was developed under the direction of seasoned concrete cutting professionals who were looking for higher quality products at manufacturer direct pricing. Our facility located in suburban Atlanta has one of the largest inventories in the Southeast and with distribution partners throughout the US, we are committed to providing the best customer service in the industry.');
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'heroku_733928f9843c014'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-15  5:20:10
