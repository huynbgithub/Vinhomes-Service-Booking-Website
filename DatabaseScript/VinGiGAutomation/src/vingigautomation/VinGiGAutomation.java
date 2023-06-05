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
import java.util.HashMap;
import java.util.Random;

public class VinGiGAutomation {

    static String[] badge = {"Non", "VinGiG Certified", "Best Provider", "Top-rated Provider", "Preferred Provider", "Promising Provider"};
//    static String[] building = {"S1.01","S1.02","S1.03","S1.05","S1.06","S1.07","S2.01","S2.02","S2.03","S2.05","S3.01","S3.02","S3.03","S3.05","S5.01","S5.02","S5.03","S6.01","S6.02","S6.03","S6.05","S6.06","S7.01","S7.02","S7.03","S7.05","S8.01","S8.02","S8.03","S9.01","S9.02","S9.03","S10.01","S10.02","S10.03","S10.05","S10.06","S10.07"};

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

    static String[] Ho = {"Nguyễn", "Trần", "Lê", "Tống", "Đặng", "Đỗ", "Trương", "Lý"};
    static String[] Ten = {"Anh", "An", "Châu", "Dương", "Giang", "Hà", "Hải", "Khánh", "Lan", "Liem", "Linh", "Nhân", "Minh", "Ninh", "Thanh", "Tường", "Quý", "Xuân"};

    void createProvider(int numberOfProviders) {
        System.out.println(" insert into Provider (username,password,buildingID,badgeID,avatar,rating,fullName,gender,email,phone,address) values ");

        for (int i = 1; i <= numberOfProviders; i++) {
            String username = randomString(5);
            String password = "1";
            String buildingID = "" + randInt(1, 38);
            String badgeID = "" + randInt(0, 5);
            String avatar = "https://lh4.googleusercontent.com/-jJAcfqo2YZQ/YPKmn7Q1U6I/AAAAAAAAO2I/MvLOy9V_7NAfPdh5TYhdwD1Yj81-87z7ACLcBGAsYHQ/s16000/thi-cong-noi-that-vinhomes-ocean-park-s105_6.jpeg";
            String rating = "" + randInt(1, 5);
            String fullName = "" + Ho[randInt(0, 7)] + " " +Ten[randInt(0, 17)];
            String gender = "" + randInt(0, 1);
            String email = randomString(10) + "@gmail.com";
            String phone = "090" + randInt(1000000, 9999999);
            String address = randInt(1, 999) +" " + randomString(3).toUpperCase() +" " + randomString(4).toUpperCase() +" " + randomString(3).toUpperCase();
            if (i != numberOfProviders) {
                System.out.println("(\'" + username + "\',\'" + password + "\',\'" + buildingID
                        + "\'," + badgeID + ",N\'" + avatar + "\'," + rating + ","
                        + fullName + "," + gender + "," + email + "," + phone + "," + address + "),");
            } else {
                System.out.println("(\'" + username + "\',\'" + password + "\',\'" + buildingID
                        + "\'," + badgeID + ",N\'" + avatar + "\'," + rating + ","
                        + fullName + "," + gender + "," + email + "," + phone + "," + address + ")");
            }

        }
    }

    static int noOfUsers = 8;

    public static void main(String[] args) {
        VinGiGAutomation auto = new VinGiGAutomation();
        System.out.println("use vingig\n"
                + "GO\n");
        auto.createProvider(1000);
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
