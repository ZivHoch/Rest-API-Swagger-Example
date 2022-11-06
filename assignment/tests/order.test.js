"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");
chai.use(chaiHttp);
chai.should();
describe("Validating a good Partner A order", () => {
  it("Should accept the request", (done) => {
    let order = {
      Partner: "sample string 1",
      OrderID: "sample string 2",
      TypeOfOrder: "sample string 3",
      SubmittedBy: "sample string 4",
      CompanyID: "sample string 5",
      CompanyName: "sample string 6",
      ContactFirstName: "sample string 7",
      ContactLastName: "sample string 8",
      ContactTitle: "sample string 9",
      ContactPhone: "sample string 10",
      ContactMobile: "sample string 11",
      LineItems: [
        {
          ID: 1,
          ProductID: "sample string 12",
          ProductType: "Website",
          Notes: "sample string 13",
          Category: "sample string 14",
          WebsiteDetails: {
            TemplateId: "sample string 15",
            WebsiteBusinessName: "sample string 16",
            WebsiteAddressLine1: "sample string 17",
            WebsiteAddressLine2: "sample string 18",
            WebsiteCity: "sample string 19",
            WebsiteState: "sample string 20",
            WebsitePostCode: "sample string 21",
            WebsitePhone: "sample string 22",
            WebsiteEmail: "sample string 23",
            WebsiteMobile: "sample string 24",
          },
        },
        {
          ID: 2,
          ProductID: "sample string 25",
          ProductType: "Website",
          Notes: "sample string 26",
          Category: "sample string 27",
          WebsiteDetails: {
            TemplateId: "sample string 28",
            WebsiteBusinessName: "sample string 29",
            WebsiteAddressLine1: "sample string 30",
            WebsiteAddressLine2: "sample string 31",
            WebsiteCity: "sample string 32",
            WebsiteState: "sample string 33",
            WebsitePostCode: "sample string 34",
            WebsitePhone: "sample string 35",
            WebsiteEmail: "sample string 36",
            WebsiteMobile: "sample string 37",
          },
        },
      ],
    };

    chai
      .request(app)
      .post("/orders")
      .send(order)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
describe("Validating a good Partner B order", () => {
  it("Should accept the request", (done) => {
    let order = {
      Partner: "sample string 1",
      OrderID: "sample string 2",
      TypeOfOrder: "sample string 3",
      SubmittedBy: "sample string 4",
      CompanyID: "sample string 5",
      CompanyName: "sample string 6",
      LineItems: [
        {
          ID: 1,
          ProductID: "sample string 12",
          ProductType: "Website",
          Notes: "sample string 13",
          Category: "sample string 14",
          WebsiteDetails: {
            TemplateId: "sample string 15",
            WebsiteBusinessName: "sample string 16",
            WebsiteAddressLine1: "sample string 17",
            WebsiteAddressLine2: "sample string 18",
            WebsiteCity: "sample string 19",
            WebsiteState: "sample string 20",
            WebsitePostCode: "sample string 21",
            WebsitePhone: "sample string 22",
            WebsiteEmail: "sample string 23",
            WebsiteMobile: "sample string 24",
          },
        },
        {
          ID: 2,
          ProductID: "sample string 25",
          ProductType: "Paid Search",
          Notes: "sample string 26",
          Category: "sample string 27",
          AdWordCampaign: {
            CampaignName: "sample string 28",
            CampaignAddressLine1: "sample string 29",
            CampaignPostCode: "sample string 30",
            CampaignRadius: "sample string 31",
            LeadPhoneNumber: "sample string 32",
            SMSPhoneNumber: "sample string 33",
            UniqueSellingPoint1: "sample string 34",
            UniqueSellingPoint2: "sample string 35",
            UniqueSellingPoint3: "sample string 36",
            Offer: "sample string 37",
            DestinationURL: "sample string 38",
          },
        },
      ],
    };

    chai
      .request(app)
      .post("/orders")
      .send(order)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
describe("Validating a good Partner C order", () => {
  it("Should accept the request", (done) => {
    let order = {
      Partner: "sample string 1",
      OrderID: "sample string 2",
      TypeOfOrder: "sample string 3",
      SubmittedBy: "sample string 4",
      CompanyID: "sample string 5",
      CompanyName: "sample string 6",
      ExposureID: "sample string 7",
      UDAC: "sample string 8",
      RelatedOrder: "sample string 9",
      LineItems: [
        {
          ID: 1,
          ProductID: "sample string 12",
          ProductType: "Website",
          Notes: "sample string 13",
          Category: "sample string 14",
          WebsiteDetails: {
            TemplateId: "sample string 15",
            WebsiteBusinessName: "sample string 16",
            WebsiteAddressLine1: "sample string 17",
            WebsiteAddressLine2: "sample string 18",
            WebsiteCity: "sample string 19",
            WebsiteState: "sample string 20",
            WebsitePostCode: "sample string 21",
            WebsitePhone: "sample string 22",
            WebsiteEmail: "sample string 23",
            WebsiteMobile: "sample string 24",
          },
        },
        {
          ID: 2,
          ProductID: "sample string 25",
          ProductType: "Paid Search",
          Notes: "sample string 26",
          Category: "sample string 27",
          AdWordCampaign: {
            CampaignName: "sample string 28",
            CampaignAddressLine1: "sample string 29",
            CampaignPostCode: "sample string 30",
            CampaignRadius: "sample string 31",
            LeadPhoneNumber: "sample string 32",
            SMSPhoneNumber: "sample string 33",
            UniqueSellingPoint1: "sample string 34",
            UniqueSellingPoint2: "sample string 35",
            UniqueSellingPoint3: "sample string 36",
            Offer: "sample string 37",
            DestinationURL: "sample string 38",
          },
        },
      ],
    };

    chai
      .request(app)
      .post("/orders")
      .send(order)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
describe("Validating a good Partner D order", () => {
  it("Should accept the request", (done) => {
    let order = {
      Partner: "sample string 1",
      OrderID: "sample string 2",
      TypeOfOrder: "sample string 3",
      SubmittedBy: "sample string 4",
      CompanyID: "sample string 5",
      CompanyName: "sample string 6",
      LineItems: [
        {
          ID: 1,
          ProductID: "sample string 7",
          ProductType: "Paid Search",
          Notes: "sample string 8",
          Category: "sample string 9",
          AdWordCampaign: {
            CampaignName: "sample string 10",
            CampaignAddressLine1: "sample string 11",
            CampaignPostCode: "sample string 12",
            CampaignRadius: "sample string 13",
            LeadPhoneNumber: "sample string 14",
            SMSPhoneNumber: "sample string 15",
            UniqueSellingPoint1: "sample string 16",
            UniqueSellingPoint2: "sample string 17",
            UniqueSellingPoint3: "sample string 18",
            Offer: "sample string 19",
            DestinationURL: "sample string 20",
          },
        },
        {
          ID: 2,
          ProductID: "sample string 25",
          ProductType: "Paid Search",
          Notes: "sample string 26",
          Category: "sample string 27",
          AdWordCampaign: {
            CampaignName: "sample string 28",
            CampaignAddressLine1: "sample string 29",
            CampaignPostCode: "sample string 30",
            CampaignRadius: "sample string 31",
            LeadPhoneNumber: "sample string 32",
            SMSPhoneNumber: "sample string 33",
            UniqueSellingPoint1: "sample string 34",
            UniqueSellingPoint2: "sample string 35",
            UniqueSellingPoint3: "sample string 36",
            Offer: "sample string 37",
            DestinationURL: "sample string 38",
          },
        },
      ],
    };

    chai
      .request(app)
      .post("/orders")
      .send(order)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
describe("Validating not good Partner A order", () => {
  it("Should deny the request", (done) => {
    let order = {
      Partner: "sample string 1",
      OrderID: "sample string 2",
      TypeOfOrder: "sample string 3",
      SubmittedBy: "sample string 4",
      CompanyID: "sample string 5",
      CompanyName: "sample string 6",
      ContactFirstName: "sample string 7",
      ContactLastName: "sample string 8",
      ContactTitle: "sample string 9",
      ContactPhone: "sample string 10",
      LineItems: [
        {
          ID: 1,
          ProductID: "sample string 12",
          ProductType: "Website",
          Notes: "sample string 13",
          Category: "sample string 14",
          WebsiteDetails: {
            TemplateId: "sample string 15",
            WebsiteAddressLine1: "sample string 17",
            WebsiteAddressLine2: "sample string 18",
            WebsiteCity: "sample string 19",
            WebsiteState: "sample string 20",
            WebsitePostCode: "sample string 21",
            WebsitePhone: "sample string 22",
            WebsiteEmail: "sample string 23",
            WebsiteMobile: "sample string 24",
          },
        },
        {
          ID: 2,
          ProductID: "sample string 25",
          ProductType: "Website",
          Notes: "sample string 26",
          Category: "sample string 27",
          WebsiteDetails: {
            TemplateId: "sample string 28",
            WebsiteBusinessName: "sample string 29",
            WebsiteAddressLine1: "sample string 30",
            WebsiteAddressLine2: "sample string 31",
            WebsiteCity: "sample string 32",
            WebsiteState: "sample string 33",
            WebsitePostCode: "sample string 34",
            WebsitePhone: "sample string 35",
            WebsiteEmail: "sample string 36",
            WebsiteMobile: "sample string 37",
          },
        },
      ],
    };

    chai
      .request(app)
      .post("/orders")
      .send(order)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
describe("Validating not good Partner B order", () => {
  it("Should deny the request", (done) => {
    let order = {
      Partner: 1,
      OrderID: "sample string 2",
      TypeOfOrder: "sample string 3",
      SubmittedBy: "sample string 4",
      CompanyID: "sample string 5",
      CompanyName: "sample string 6",
      LineItems: [
        {
          ID: 1,
          ProductID: "sample string 12",
          ProductType: "Website",
          Notes: "sample string 13",
          Category: "sample string 14",
          WebsiteDetails: {
            TemplateId: "sample string 15",
            WebsiteBusinessName: "sample string 16",
            WebsiteAddressLine1: "sample string 17",
            WebsiteAddressLine2: "sample string 18",
            WebsiteCity: "sample string 19",
            WebsiteState: "sample string 20",
            WebsitePostCode: "sample string 21",
            WebsitePhone: "sample string 22",
            WebsiteEmail: "sample string 23",
            WebsiteMobile: "sample string 24",
          },
        },
        {
          ID: 2,
          ProductID: "sample string 25",
          ProductType: "Paid Search",
          Notes: 55,
          AdWordCampaign: {
            CampaignName: "sample string 28",
            CampaignAddressLine1: "sample string 29",
            CampaignPostCode: "sample string 30",
            CampaignRadius: "sample string 31",
            LeadPhoneNumber: "sample string 32",
            SMSPhoneNumber: "sample string 33",
            UniqueSellingPoint1: "sample string 34",
            UniqueSellingPoint2: "sample string 35",
            UniqueSellingPoint3: "sample string 36",
            Offer: "sample string 37",
            DestinationURL: "sample string 38",
          },
        },
      ],
    };

    chai
      .request(app)
      .post("/orders")
      .send(order)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
