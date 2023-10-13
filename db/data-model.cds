namespace my.airemission;

entity Companys {
  key ID                : Integer;
      name              : String;
      location          : String;
  key date              : Date;
      sox               : Integer;
      nox               : Integer;
      particulateMatter : Integer;
}

view Final_data1 as
  select from Companys {
    ID,
    name,
    location,
    date,
    substring(
      date, 1, 4
    ) as zyear : String,
    sox,
    nox,
    particulateMatter,
  };


view Final_data2 as
  select from Final_data1 {
    key ID,
        name,
        zyear,
        sum(nox)               as total_nox               : Decimal,
        sum(sox)               as total_sox               : Decimal,
        sum(particulateMatter) as total_particulateMatter : Decimal
  }
  group by
    ID,
    zyear,
    name;
