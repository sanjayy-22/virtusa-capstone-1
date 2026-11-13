import java.util.HashMap;
import java.util.Scanner;

public class WordFrequency {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine();

        String[] words = sentence.toLowerCase().split("\\s+");

        HashMap<String, Integer> frequency = new HashMap<>();

        for (String word : words) {
            frequency.put(word, frequency.getOrDefault(word, 0) + 1);
        }

        System.out.println("Word Frequencies:");

        for (String word : frequency.keySet()) {
            System.out.println(word + " : " + frequency.get(word));
        }

    }
}
