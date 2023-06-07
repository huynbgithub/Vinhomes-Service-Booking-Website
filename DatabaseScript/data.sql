--Insert Badge
INSERT INTO Badge(badgeName, description, benefit) VALUES ('Non', N'default badge cho provider còn lại',1);
INSERT INTO Badge(badgeName, description, benefit) VALUES ('VinGiG Certified', N'Những providers đã được sàn VinGiG kiểm duyệt về chất lượng và các ràng buộc khác để đảm bảo chất lượng của các dịch vụ. Rank cao nhất.', '0.8');
INSERT INTO Badge(badgeName, description, benefit) VALUES ('Best Provider', N'Dành cho 1 provider có lượt booking cao nhất của 1 tháng. Badge kéo dài trong 1 tháng', '0.8');
INSERT INTO Badge(badgeName, description, benefit) VALUES ('Top-rated Provider', N'Dành cho những provider nào có trên 80 booking/ tháng và rating > 4.5 sao. Badge kéo dài trong 1 tháng', '0.9');
INSERT INTO Badge(badgeName, description, benefit) VALUES ('Preferred Provider', N'Dành cho những provider nào có trên 60 booking/ tháng và rating > 4 sao. Badge kéo dài trong 1 tháng', '0.95');
INSERT INTO Badge(badgeName, description, benefit) VALUES ('Promising Provider', N'Dành cho những provider mới tham gia VinGiG. Badge kéo dài trong 1 tuần.', '0.9');

--Insert Plan
INSERT INTO [Plan] (description, duration, price) VALUES (N'Gói Tháng', '30', '50000');
INSERT INTO [Plan] (description, duration, price) VALUES (N'Gói Qúy', '90', '140000');
INSERT INTO [Plan] (description, duration, price) VALUES (N'Gói Bán Niên', '182', '250000');
INSERT INTO [Plan] (description, duration, price) VALUES (N'Gói Thường Niên', '365', '480000');

--Insert ServiceCategory
INSERT INTO ServiceCategory (categoryName, description) VALUES (N'Máy Lạnh', N'Kiểm tra máy lạnh/Vệ sinh màng lọc/Sửa chữa máy lạnh/Bơm gas máy lạnh');
INSERT INTO ServiceCategory (categoryName, description) VALUES (N'Bào trì & Sửa chữa nhà', N'Sơn lại tường, Thay pin cửa, Thông cống bồn cầu, Thay mặt bồn rửa, Lắp đặt hệ thống nước/Thay kiếng');
INSERT INTO ServiceCategory (categoryName, description) VALUES (N'Việc nhà', N'Combo việc nhà: rửa chén, quét dọn, lau nhà, vệ sinh toilet');
INSERT INTO ServiceCategory (categoryName, description) VALUES (N'Chăm sóc tại gia', N'Giữ trẻ/chăm bệnh người già');
INSERT INTO ServiceCategory (categoryName, description) VALUES (N'Theo dõi sức khỏe', N'Truyền dịch nước biển/ vệ sinh vết thương/ thăm khám bệnh tại gia');
INSERT INTO ServiceCategory (categoryName, description) VALUES (N'Chợ/Bếp', N'Đi chợ/ Nấu cơm');
INSERT INTO ServiceCategory (categoryName, description) VALUES (N'Giặt giũ', N'Giặt xả quần áo/ Giặt rèm cửa');
INSERT INTO ServiceCategory (categoryName, description) VALUES (N'Vệ sinh thiết bị', N'Vệ sinh máy giặt/ Vệ sinh dàn máy tính');

--Insert Service
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('1', N'Kiểm tra máy lạnh', N'kiểm tra máy lạnh còn chạy được không,bụi bẩn như thế nào, gas, đầu nóng đầu lạnh', N'máy', '20000', '50000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('1', N'Vệ sinh máy lạnh', N'tiến hành tháo giỡ giàn áo, vệ sinh đầu lạnh và đầu nóng', N'máy', '120000', '200000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('1', N'Sửa chữa máy lạnh', N'Sửa chữa các vấn đề liên quan đến máy lạnh', N'máy', '250000', '450000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('1', N'Bơm gas máy lạnh', N'tiến hành đo lượng ga của máy lạnh và bơm đầy', N'máy', '200000', '300000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('2', N'Sơn lại tường', N'trao đổi với anh/chị về diện tích phòng, trao đổi với nhau sau đó hẹn ngày sơn tường.', N'm2', '25000', '45000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('2', N'Thay pin cửa', N'trao đổi với anh/chị về loại cửa nhà dùng và đem pin thích hợp nhất đến thay', N'cửa', '20000', '60000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('2', N'Thông cống bồn cầu', N'với công cụ vạn năng, chúng tôi thông bất kì bồn nào, dùng thuốc hoặc sức', N'chiếc', '200000', '400000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('2', N'Thay mặt bồn rửa', N'trao đổi với anh/chị về loại bồn mặt', N'chiếc', '700000', '1500000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('2', N'Dịch vụ thay bóng đèn ', N'thông báo số lượng cần thay và tiến hành thay', N'bóng', '400000', '600000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('2', N'Thay kiếng cửa', N'tiến hành sơ thẩm, đến nhà xem xét và đưa ra quyết định', N'm2', '350000', '500000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('3', N'Combo việc nhà: rửa chén, quét dọn, lau nhà, vệ sinh toilet', N'trao đối với anh chị với loại phòng ngủ để ước lượng số giờ làm việc', N'tiếng', '50000', '100000', '10000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('4', N'Giữ trẻ', N'gọi cho anh/chị quyết định ngày giờ trông', N'tiếng', '40000', '100000', '10000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('4', N'Chăm bệnh người già', N'trao đổi với anh chị về số giờ chăm và làm', N'tiếng', '40000', '100000', '10000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('5', N'Truyền dịch', N'Truyền dịch theo đơn hoặc theo yêu cầu bệnh nhân', N'chai', '100000', '200000', '10000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('5', N'Vệ sinh vết thương', N'tiến hành sát trùng, thay băng bông và kiểm tra vết thương', N'lần', '50000', '80000', '10000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('5', N'Thăm khám bệnh tại gia', N'hẹn giờ với anh chị  đi đến trao đổi bệnh tình hoặc là qua điện thoại', N'lần', '100000', '170000', '10000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('6', N'Đi chợ', N'lấy order của khách hàng qua tin nhắn hoặc là hội thoại sau đó đi và đem về cho quý khách', N'lần', '40000', '80000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('7', N'Giặt xả quần áo', N'đến nơi lấy đồ về và tiến hành cân kí sau liên lạc với quý khách số cân và giao dịch', N'Kg', '5000', '10000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('7', N'Giặt rèm cửa', N'đến nơi và tháo rèm cửa đem về giặt, phân loại chất liệu rèm mà tiến hành giặt và sau khi khô sẽ tiến hành lắp lại cho quý khách', N'Kg', '30000', '50000', '5000');
INSERT INTO Service (categoryID, serviceName, description, unit, priceMin, priceMax, fee) VALUES ('8', N'Vệ sinh máy giặt', N'vệ sinh lồng giặt, kiểm tra máy giặt còn ổn định không', N'máy', '150000', '250000', '5000');

--Insert Building
INSERT INTO Building (buildingName, note) VALUES ('S1.01', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S1.02', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S1.03', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S1.05', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S1.06', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S1.07', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S2.01', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S2.02', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S2.03', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S2.05', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S3.01', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S3.02', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S3.03', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S3.05', 'Khu Rainbow');
INSERT INTO Building (buildingName, note) VALUES ('S5.01', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S5.02', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S5.03', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S6.01', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S6.02', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S6.03', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S6.05', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S6.06', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S7.01', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S7.02', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S7.03', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S7.05', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S8.01', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S8.02', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S8.03', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S9.01', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S9.02', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S9.03', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S10.01', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S10.02', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S10.03', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S10.05', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S10.06', 'Khu Origami');
INSERT INTO Building (buildingName, note) VALUES ('S10.07', 'Khu Origami');

  insert into Provider (username,password,buildingID,badgeID,avatar,rating,fullName,gender,email,phone,address) values 
('wuvix','1','38','3',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','5','Trương Hải','1','jvdfknnibx@gmail.com','0906999792','176 PNJ JTDT WKL'),
('pnglu','1','26','2',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','2','Tống Giang','1','kzbsupnnxg@gmail.com','0902443606','981 YWI XJQP NBV'),
('xwslj','1','12','2',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','5','Trương Lan','0','pfegtbhloq@gmail.com','0902232526','63 KVT ESSW UDQ'),
('brzaq','1','1','1',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','1','Trương Xuân','0','nhidpqpzzm@gmail.com','0905251479','945 JRC RLBK IEG'),
('rxyuh','1','29','4',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','3','Lê Linh','0','dzkaiueoek@gmail.com','0906123787','721 IRM WADU QRC'),
('muihy','1','35','1',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','5','Đỗ Giang','0','adigtpjbtv@gmail.com','0909374579','981 ZJE WUHS PFJ'),
('jdwfq','1','12','6',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','4','Lý Ninh','0','optovqspnr@gmail.com','0904969019','421 IVO HBDH FHD'),
('jqbtg','1','32','4',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','4','Đỗ Tường','1','pdtgiuvjoj@gmail.com','0904119879','855 YWA KAGH BPB'),
('hxmqj','1','25','6',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','2','Trần Thanh','0','pcpjtadsms@gmail.com','0902509002','689 UZN VVCA DAW'),
('ilzar','1','32','1',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','4','Trương An','1','wicxwvbitr@gmail.com','0901317159','87 HGY XRKN WFF')
 insert into Customer (buildingID, username,password,fullName,dob,avatar,gender,email,phone,address, createDate, rating) values 
('4','jftmw','1','Lý Linh','4-15-1991',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','imsymmavkm@gmail.com','0906496818','547 MTN DSQU IYJ','11-9-2021','4'),
('24','mzuwb','1','Đặng Liem','6-23-2003',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','1','gbhlrfnosr@gmail.com','0902263369','425 IEX JVKA VRD','2-10-2023','2'),
('38','imgky','1','Đặng Dương','10-4-1990',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','shejcmsjso@gmail.com','0902519652','998 EDY RROX ICF','8-15-2023','2'),
('35','qdjys','1','Lý Quý','10-10-1990',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','qsdzklwiru@gmail.com','0901965551','92 KOT WIML PEZ','8-16-2023','4'),
('28','ryfpw','1','Đặng Thanh','2-25-2001',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','1','zjyjrnkpzb@gmail.com','0903628561','196 OQD BDLY NNO','2-13-2020','2'),
('24','jmfhg','1','Trương Thanh','11-21-2000',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','1','htwhoiuhuj@gmail.com','0903777413','463 QGI KITY WXB','4-26-2020','1'),
('35','vdqxk','1','Trần Xuân','6-7-1994',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','iynfwaawyh@gmail.com','0902163300','950 JLX VRPB RAE','11-4-2020','4'),
('17','yvlxz','1','Nguyễn Hà','10-27-2002',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','qreqwsapnz@gmail.com','0907413402','381 SSV JFBJ RJK','6-13-2021','5'),
('28','gcbic','1','Lê Khánh','11-6-2002',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','mzotezyllq@gmail.com','0904555540','971 STV PJQU JVP','4-20-2022','5'),
('3','dnxgc','1','Đỗ Giang','6-1-2002',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','1','nfmpyynpfd@gmail.com','0902204137','831 IEJ TOGI NCL','10-26-2020','5'),
('14','lsgkk','1','Trần Linh','2-27-2001',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','1','wsfksxxnpb@gmail.com','0908023814','43 KRB OLOB GXX','1-18-2023','5'),
('30','jlmzx','1','Trần Thanh','12-23-1993',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','vuufdafurs@gmail.com','0909767544','393 PKL JZHN LRZ','11-14-2020','5'),
('29','odkdv','1','Nguyễn Nhân','12-22-1995',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','ovzfdfvcul@gmail.com','0906692771','58 OKR WVTG CPE','1-16-2023','2'),
('29','lotfq','1','Đặng Xuân','8-25-2001',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','xaimexgqvv@gmail.com','0902144493','356 QSO LMOI UPQ','7-7-2021','1'),
('28','rmzeb','1','Lê Thanh','7-15-2001',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','lrvlmeuhnc@gmail.com','0901884395','438 EFD ABBQ ESU','12-11-2023','5'),
('8','skqxr','1','Nguyễn Liem','10-21-2004',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','bybaxzrqcg@gmail.com','0901586558','53 PRO CEHI COJ','8-14-2023','2'),
('8','pxavt','1','Đỗ Xuân','3-27-2001',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','0','dowpfgrlrq@gmail.com','0909232156','761 GOI QWVG SBX','7-4-2023','1'),
('14','knkua','1','Trần Châu','6-25-1995',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','1','vzahxoawli@gmail.com','0904758673','480 UXB OUEH EWK','6-17-2020','3'),
('20','hpxgn','1','Nguyễn Lan','12-4-2000',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','1','menjqjbkxt@gmail.com','0908766139','489 UXT MWXU PMW','8-27-2023','4'),
('27','iejsf','1','Đặng Minh','1-17-1995',N'congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg','1','zkymcilvor@gmail.com','0909788420','957 CWA KFKL UJC','3-9-2022','1')
 insert into ProviderService (providerID,serviceID,rating,bookingNo,unitPrice,description,availability) values 
('4','15','3','0','20',N'Sửa chữa các vấn đề liên quan đến máy lạnh','0'),
('3','12','1','0','20',N'trao đổi với anh/chị về loại bồn mặt','0'),
('8','4','2','0','20',N'Sửa chữa các vấn đề liên quan đến máy lạnh','0'),
('3','1','2','0','20',N'kiểm tra máy lạnh còn chạy được không, bụi bẩn như thế nào, gas, đầu nóng đầu lạnh','0'),
('3','4','2','0','20',N'tiến hành tháo giở dàn áo, vệ sinh đầu lạnh và đầu nóng','1'),
('7','19','3','0','20',N'với công cụ vạn năng, chúng tôi thông bất kì bồn nào, dùng thuốc hoặc sức','1'),
('5','20','4','0','20',N'trao đổi với anh/chị về diện tích phòng, trao đổi với nhau sau đó hẹn ngày sơn tường.','1'),
('2','7','4','0','20',N'trao đổi với anh/chị về loại bồn mặt','1'),
('4','6','3','0','20',N'kiểm tra máy lạnh còn chạy được không, bụi bẩn như thế nào, gas, đầu nóng đầu lạnh','0'),
('7','12','1','0','20',N'tiến hành tháo giở dàn áo, vệ sinh đầu lạnh và đầu nóng','1'),
('10','13','5','0','20',N'trao đổi với anh/chị về loại bồn mặt','0'),
('1','7','3','0','20',N'trao đổi với anh/chị về loại bồn mặt','1'),
('8','2','3','0','20',N'Sửa chữa các vấn đề liên quan đến máy lạnh','1'),
('8','7','4','0','20',N'kiểm tra máy lạnh còn chạy được không, bụi bẩn như thế nào, gas, đầu nóng đầu lạnh','1'),
('5','16','1','0','20',N'Sửa chữa các vấn đề liên quan đến máy lạnh','1'),
('1','20','4','0','20',N'tiến hành tháo giở dàn áo, vệ sinh đầu lạnh và đầu nóng','0'),
('8','12','1','0','20',N'tiến hành tháo giở dàn áo, vệ sinh đầu lạnh và đầu nóng','1'),
('8','12','3','0','20',N'kiểm tra máy lạnh còn chạy được không, bụi bẩn như thế nào, gas, đầu nóng đầu lạnh','1'),
('3','17','2','0','20',N'tiến hành đo lượng ga của máy lạnh  và bơm đầy','1'),
('5','3','3','0','20',N'tiến hành đo lượng ga của máy lạnh  và bơm đầy','1'),
('8','7','3','0','20',N'tiến hành đo lượng ga của máy lạnh  và bơm đầy','0'),
('7','17','1','0','20',N'với công cụ vạn năng, chúng tôi thông bất kì bồn nào, dùng thuốc hoặc sức','0'),
('8','13','2','0','20',N'trao đổi với anh/chị về diện tích phòng, trao đổi với nhau sau đó hẹn ngày sơn tường.','0'),
('3','4','1','0','20',N'trao đổi với anh/chị về loại bồn mặt','1'),
('9','15','4','0','20',N'với công cụ vạn năng, chúng tôi thông bất kì bồn nào, dùng thuốc hoặc sức','1'),
('5','11','4','0','20',N'tiến hành đo lượng ga của máy lạnh  và bơm đầy','1'),
('4','7','2','0','20',N'trao đổi với anh/chị về diện tích phòng, trao đổi với nhau sau đó hẹn ngày sơn tường.','0'),
('6','9','5','0','20',N'tiến hành đo lượng ga của máy lạnh  và bơm đầy','0'),
('7','14','4','0','20',N'Sửa chữa các vấn đề liên quan đến máy lạnh','0'),
('2','16','1','0','20',N'kiểm tra máy lạnh còn chạy được không, bụi bẩn như thế nào, gas, đầu nóng đầu lạnh','1'),
('7','13','5','0','20',N'với công cụ vạn năng, chúng tôi thông bất kì bồn nào, dùng thuốc hoặc sức','1'),
('9','9','3','0','20',N'Sửa chữa các vấn đề liên quan đến máy lạnh','0'),
('8','8','5','0','20',N'trao đổi với anh/chị về loại bồn mặt','1'),
('10','15','4','0','20',N'với công cụ vạn năng, chúng tôi thông bất kì bồn nào, dùng thuốc hoặc sức','0'),
('7','2','5','0','20',N'Sửa chữa các vấn đề liên quan đến máy lạnh','1'),
('6','16','1','0','20',N'Sửa chữa các vấn đề liên quan đến máy lạnh','1'),
('6','9','5','0','20',N'tiến hành tháo giở dàn áo, vệ sinh đầu lạnh và đầu nóng','1'),
('8','19','2','0','20',N'trao đổi với khách hàng về loại cửa nhà dùng và đem pin thích hợp nhất đến thay','0'),
('8','8','5','0','20',N'tiến hành tháo giở dàn áo, vệ sinh đầu lạnh và đầu nóng','1'),
('4','15','4','0','20',N'tiến hành tháo giở dàn áo, vệ sinh đầu lạnh và đầu nóng','0')
 insert into Booking (customerID,proServiceID,buildingID,apartment,unitPrice,total,status,date,providersRating,providersReview,customersRating,customerReview) values 
('12','24','13','1463','20',N'15','1','8-1-2020','2','tệ','2','tệ'),
('10','8','3','1928','20',N'14','0','10-12-2020','5','tệ','2','tốt'),
('4','22','12','1156','20',N'18','0','11-15-2020','1','trung bình','3','tốt'),
('14','35','1','1633','20',N'15','1','1-1-2021','5','tốt','2','tốt'),
('14','7','19','1640','20',N'8','1','12-27-2023','3','trung bình','4','tệ'),
('16','15','37','3050','20',N'5','0','8-17-2022','3','trung bình','4','trung bình'),
('3','25','16','1560','20',N'9','0','9-24-2021','2','tốt','2','trung bình'),
('2','37','34','537','20',N'5','0','3-8-2022','3','tốt','1','trung bình'),
('17','35','38','637','20',N'7','1','8-16-2023','1','tệ','2','tốt'),
('6','10','25','1619','20',N'9','0','6-13-2021','4','trung bình','2','tệ'),
('3','17','23','1938','20',N'2','0','8-18-2022','1','trung bình','2','tốt'),
('18','13','25','2606','20',N'9','1','3-7-2023','3','tệ','4','tệ'),
('12','5','13','581','20',N'4','1','2-7-2021','5','trung bình','2','trung bình'),
('4','2','5','1155','20',N'9','1','11-26-2021','4','tệ','5','tệ'),
('16','15','2','277','20',N'17','1','4-22-2020','5','tệ','1','trung bình'),
('18','8','23','3325','20',N'2','1','7-11-2023','1','trung bình','4','tệ'),
('18','24','24','1605','20',N'3','0','2-2-2020','4','tốt','4','tốt'),
('16','32','23','1129','20',N'20','1','9-13-2020','5','trung bình','5','tốt'),
('9','31','14','1324','20',N'10','0','6-20-2021','2','tốt','2','tốt'),
('1','23','5','3330','20',N'20','1','4-1-2021','1','tốt','3','trung bình')