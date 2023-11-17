import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Base64;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws MalformedURLException {
        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNext()){
            String query = scanner.nextLine();
            System.out.println("Query: " + query);

            final String credentials = "Shivi:w0rdP!ss1";
            URL url = new URL("https://realtime.oxylabs.io/v1/queries");

            try {
                HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();

                httpURLConnection.setRequestMethod("POST");
                httpURLConnection.setRequestProperty("Authorization", "Basic " + Base64.getEncoder().encodeToString(credentials.getBytes()));
                httpURLConnection.setRequestProperty("Content-Type", "application/json");
                httpURLConnection.setDoOutput(true);

                String body = "{\"source\": \"amazon_search\", \"query\": \"%s\", \"parse\": \"true\", \"domain\": \"com\"}";

                try (DataOutputStream wr = new DataOutputStream((httpURLConnection.getOutputStream()))){
                    wr.writeBytes(String.format(body, query));
                    wr.flush();
                }

                int responseCode = httpURLConnection.getResponseCode();
                System.out.println("Response Code: " + responseCode);

                if (responseCode == HttpURLConnection.HTTP_OK){
                    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
                    String line;
                    StringBuilder response = new StringBuilder();

                    while((line = bufferedReader.readLine()) != null){
                        response.append(line);
                    }
                    bufferedReader.close();

                    System.out.println("Response: " + response.toString());
                } else {
                    System.out.println("Error" + responseCode);
                }
            } catch (IOException e) {
                System.out.println("Error opening connection with Oxylab queries");
                throw new RuntimeException(e);
            }
        }

    }
}