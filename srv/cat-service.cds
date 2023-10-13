using my.airemission as my from '../db/data-model';

service CatalogService {
    entity Companys as projection on my.Companys;
    entity Final_data1 as projection on my.Final_data1;
    entity Final_data2 as projection on my.Final_data2;

    action status(ID:Integer,zyear:Integer);
}
