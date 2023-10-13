const cds = require('@sap/cds');

module.exports = (srv) => {
    const { Final_data2 } = cds.entities('my.airemission');

    srv.on('status', async req => {
        const { ID, zyear} = req.data;

        let nameResult = await SELECT.from(Final_data2, ['name']).where({ ID: ID, zyear: zyear });

        if (nameResult.length > 0) {
            let name = nameResult[0].name;
            console.log("Company Name: " + name + ", Year: " + zyear);
        } else {
            console.log("No data found for Company ID: " + ID + ", Year: " + zyear);
        }

        let total_sox = await SELECT.from(Final_data2, ['total_sox']).where({ ID: ID, zyear: zyear });
        if (total_sox[0].total_sox < 100) {
            console.log("Sox: Low Risk");

            // console.log(total_sox[0].total_sox);
        } else {
            console.log("Sox: High Risk");
            // console.log(total_sox);
        }

        let total_nox = await SELECT.from(Final_data2, ['total_nox']).where({ ID: ID, zyear: zyear });
        if (total_nox[0].total_nox < 100) {
            console.log("Nox: Low Risk");
            // console.log(total_nox);
        } else {
            console.log("Nox: High Risk");
            // console.log(total_nox);
        }

        let total_particulateMatter = await SELECT.from(Final_data2, ['total_particulateMatter']).where({ ID: ID, zyear: zyear });
        if (total_particulateMatter.length < 100) {
            console.log("Particulate Matter: Low Risk");
            // console.log(total_particulateMatter);
        } else {
            console.log("Particulate Matter: High Risk");
            // console.log(total_particulateMatter);
        }
    });
};
