/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vingigautomation;

/**
 *
 * @author ASUS
 */
import java.util.Random;

public class VinGiGAutomation {

    static int numberOfBadges = 6;
    static int numberOfBuildings = 38;
    static int numberOfCategories = 8;
    static int numberOfServices = 20;
    static int numberOfProviders = 10;
    static int numberOfCustomers = 20;
    static int numberOfProviderServices = 40;
    static int numberOfBookings = 20;

    public static void main(String[] args) {
        VinGiGAutomation auto = new VinGiGAutomation();
        auto.createProvider();
        auto.createCustomer();
        auto.createProviderService();
        auto.createBooking();
    }

    public String randomString(int targetStringLength) {

        int leftLimit = 97; // letter 'a'
        int rightLimit = 122; // letter 'z'
        Random random = new Random();
        StringBuilder buffer = new StringBuilder(targetStringLength);
        for (int i = 0; i < targetStringLength; i++) {
            int randomLimitedInt = leftLimit + (int) (random.nextFloat() * (rightLimit - leftLimit + 1));
            buffer.append((char) randomLimitedInt);
        }
        String generatedString = buffer.toString();

        return generatedString;
    }

    private void createCustomer() {
        System.out.println(" insert into Customer (buildingID, username,password,fullName,dob,avatar,gender,email,phone,address, createDate, rating) values ");

        for (int i = 1; i <= numberOfCustomers; i++) {
            String buildingID = "" + randInt(1, numberOfBuildings);
            String username = randomString(5);
            String password = "1";
            String fullName = "" + Ho[randInt(0, 7)] + " " + Ten[randInt(0, 17)];
            String dob = randInt(1, 12) + "-" + randInt(1, 28) + "-" + randInt(199, 200) + randInt(0, 5);

            String avatar = "congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg";
            String gender = "" + randInt(0, 1);
            String email = randomString(10) + "@gmail.com";
            String phone = "090" + randInt(1000000, 9999999);
            String address = randInt(1, 999) + " " + randomString(3).toUpperCase() + " " + randomString(4).toUpperCase() + " " + randomString(3).toUpperCase();
            String createDate = randInt(1, 12) + "-" + randInt(1, 28) + "-202" + randInt(0, 3);
            String rating = "" + randInt(1, 5);
            if (i != numberOfCustomers) {
                System.out.println("('" + buildingID + "','" + username + "','" + password + "','" + fullName
                        + "','" + dob + "',N'" + avatar + "','" + gender + "','"
                        + email + "','" + phone + "','" + address + "','" + createDate + "','" + rating + "'),");
            } else {
                System.out.println("('" + buildingID + "','" + username + "','" + password + "','" + fullName
                        + "','" + dob + "',N'" + avatar + "','" + gender + "','"
                        + email + "','" + phone + "','" + address + "','" + createDate + "','" + rating + "')");
            }
        }
    }
    static String[] Ho = {"Nguyễn", "Trần", "Lê", "Tống", "Đặng", "Đỗ", "Trương", "Lý"};
    static String[] Ten = {"Anh", "An", "Châu", "Dương", "Giang", "Hà", "Hải", "Khánh", "Lan", "Liem", "Linh", "Nhân", "Minh", "Ninh", "Thanh", "Tường", "Quý", "Xuân"};

    void createProvider() {
        System.out.println(" insert into Provider (username,password,buildingID,badgeID,avatar,rating,fullName,gender,email,phone,address) values ");

        for (int i = 1; i <= numberOfProviders; i++) {
            String username = randomString(5);
            String password = "1";
            String buildingID = "" + randInt(1, numberOfBuildings);
            String badgeID = "" + randInt(1, numberOfBadges);
            String avatar = "congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2023/3/11/14100515-4-16785430933871608306862.jpg";
            String rating = "" + randInt(1, 5);
            String fullName = "" + Ho[randInt(0, 7)] + " " + Ten[randInt(0, 17)];
            String gender = "" + randInt(0, 1);
            String email = randomString(10) + "@gmail.com";
            String phone = "090" + randInt(1000000, 9999999);
            String address = randInt(1, 999) + " " + randomString(3).toUpperCase() + " " + randomString(4).toUpperCase() + " " + randomString(3).toUpperCase();
            if (i != numberOfProviders) {
                System.out.println("('" + username + "','" + password + "','" + buildingID
                        + "','" + badgeID + "',N'" + avatar + "','" + rating + "','"
                        + fullName + "','" + gender + "','" + email + "','" + phone + "','" + address + "'),");
            } else {
                System.out.println("('" + username + "','" + password + "','" + buildingID
                        + "','" + badgeID + "',N'" + avatar + "','" + rating + "','"
                        + fullName + "','" + gender + "','" + email + "','" + phone + "','" + address + "')");
            }

        }
    }
    static String[] re = {"tốt", "tệ", "trung bình"};
    static String[] ac = {"Provider", "Customer"};
    static String[] dess = {"kiểm tra máy lạnh còn chạy được không, bụi bẩn như thế nào, gas, đầu nóng đầu lạnh",
        "tiến hành tháo giở dàn áo, vệ sinh đầu lạnh và đầu nóng",
        "Sửa chữa các vấn đề liên quan đến máy lạnh",
        "tiến hành đo lượng ga của máy lạnh  và bơm đầy",
        "trao đổi với anh/chị về diện tích phòng, trao đổi với nhau sau đó hẹn ngày sơn tường.",
        "trao đổi với khách hàng về loại cửa nhà dùng và đem pin thích hợp nhất đến thay",
        "với công cụ vạn năng, chúng tôi thông bất kì bồn nào, dùng thuốc hoặc sức",
        "trao đổi với anh/chị về loại bồn mặt",
        "thông báo số lượng cần thay và tiến hành thay",
        "tiến hành sơ thẩm, đến nhà xem xét và đưa ra quyết định",
        "trao đối với anh chị với loại phòng ngủ để ước lượng số giờ làm việc",
        "gọi cho khách hàng quyết định ngày giờ trông ",
        "trao đổi với khách hàng về số giờ chăm và làm ",
        "Truyền dịch theo đơn hoặc theo yêu cầu bệnh nhân",
        "tiến hành sát trùng, thay băng bông và kiểm tra vết thương",
        "hẹn giờ với anh chị  đi đến trao đổi bệnh tình hoặc là qua điện thoại ",
        "lấy order của khách hàng qua tin nhắn hoặc là hội thoại sau đó đi và đem về cho quý khách",
        "đến nơi lấy đồ về và tiến hành cân kí sau liên lạc với quý khách số cân và giao dịch ",
        "đến nơi và tháo rèm cửa đem về giặt, phân loại chất liệu rèm mà tiến hành giặt và sau khi khô sẽ tiến hành lắp lại cho quý khách",
        "vệ sinh lồng giặt, kiểm tra máy giặt còn ổn định không"};

    void createBooking() {
        System.out.println(" insert into Booking (customerID,proServiceID,buildingID,apartment,unitPrice,total,status,date,providersRating,providersReview,customersRating,customerReview) values ");

        for (int i = 1; i <= numberOfBookings; i++) {
            //  String username = randomString(5);
            // String password = "1";
            String customerID = "" + randInt(1, numberOfCustomers);
            String proServiceID = "" + randInt(1, numberOfProviderServices);
            String buildingID = "" + randInt(1, numberOfBuildings);
            String apartment = "" + randInt(201, 3520);
            String unitPrice = "" + randInt(20, 20);
            String total = "" + randInt(1, 20);
            String status = "" + randInt(0, 1);
            String date = "" + randInt(1, 12) + "-" + randInt(1, 28) + "-202" + randInt(0, 3);
            String providersReview = re[randInt(0, 2)];
            String customersReview = re[randInt(0, 2)];
            String providersRating = "" + randInt(1, 5);
            String customersRating = "" + randInt(1, 5);

            if (i != numberOfBookings) {
                System.out.println("('" + customerID + "','" + proServiceID + "','" + buildingID + "','" + apartment + "','" + unitPrice + "',N'" + total + "','" + status + "','" + date + "','" + providersRating + "','" + providersReview + "','" + customersRating + "','" + customersReview + "'),");
            } else {
                System.out.println("('" + customerID + "','" + proServiceID + "','" + buildingID + "','" + apartment + "','" + unitPrice + "',N'" + total + "','" + status + "','" + date + "','" + providersRating + "','" + providersReview + "','" + customersRating + "','" + customersReview + "')");
            }

        }
    }

    void createProviderService() {
        System.out.println(" insert into ProviderService (providerID,serviceID,rating,bookingNo,unitPrice,description,availability) values ");

        for (int i = 1; i <= numberOfProviderServices; i++) {
            String providerID = "" + randInt(1, numberOfProviders);
            String serviceID = "" + randInt(1, numberOfServices);
            String rating = "" + randInt(1, 5);
            String bookingNo = "" + randInt(0, 0);
            String unitPrice = "" + randInt(20, 20);
            String des = "" + dess[randInt(0, 7)];
            String avai = "" + randInt(0, 1);
            if (i != numberOfProviderServices) {
                System.out.println("('" + providerID + "','" + serviceID + "','" + rating + "','" + bookingNo + "','" + unitPrice + "',N'" + des + "','" + avai + "'),");
            } else {
                System.out.println("('" + providerID + "','" + serviceID + "','" + rating + "','" + bookingNo + "','" + unitPrice + "',N'" + des + "','" + avai + "')");

            }
        }
    }

    public static int randInt(int min, int max) {
        return (int) Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static int randInt(int min, int max, int unit) {
        return Math.round(VinGiGAutomation.randInt(min, max) / unit) * unit;
    }

    public static int randIntExcept(int min, int max, int except) {
        int output = randInt(min, max);
        return (output != except) ? output : randIntExcept(min, max, except);
    }

    public static String randTime() {
        String min = String.valueOf(randInt(0, 59, 5));
        String hour = String.valueOf(randInt(0, 23));
        min = (min.equals("0") ? "00" : min);
        hour = (hour.equals("0") ? "00" : hour);
        return hour + ":" + min + ":00";
    }

    public static String randTime(String time) {
        String[] str = time.split(":");
        String hour = String.valueOf((Integer.parseInt(str[0]) + randInt(2, 6)) % 24);
        String min = String.valueOf((Integer.parseInt(str[1]) + randInt(0, 61, 5)) % 60);
        hour = (hour.equals("0") ? "00" : hour);
        min = (min.equals("0") ? "00" : min);

        return hour + ":" + min + ":00";
    }
}
