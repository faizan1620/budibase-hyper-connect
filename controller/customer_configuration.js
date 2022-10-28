const { connect } = require( "hyper-connect");

const hyper = connect(process.env.HYPER_APP_CONNECTION_URL);

const CustomerDocType = "customer-config";

const createCustomerConfig = async (req, res) => {
  try {
    const custConfigData = {
      type: CustomerDocType,
      ...req.body,
    };
    const result = await hyper.data.add(custConfigData);
    res.send(result)
  } catch (err) {
    console.log("Error while Creating Customer Config => ", err);
    throw err;
  }
};

const getCustomers = async (req, res) => {
  try {
    const result = await hyper.data.query({ type: CustomerDocType });
    res.send(result)
  } catch (err) {
    console.log("Error while getting Customers => ", err);
    throw err;
  }
};

module.exports = { createCustomerConfig, getCustomers };
