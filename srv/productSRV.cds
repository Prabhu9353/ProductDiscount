using { db } from '../db/product';

service ProductCatalog {

    entity ProductSet as projection on db.Product;
    action applyDiscount(ID:UUID) returns String;

}
