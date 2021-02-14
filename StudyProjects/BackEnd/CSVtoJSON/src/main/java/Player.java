import lombok.Data;

/**
 * Created by brittanytinnin on 12/4/20 8:13 PM
 */

@Data
public class Player {

    private int year;
    private String teamId;
    private String leagueId;
    private String playerId;
    private int salary;




    public Player(int year, String teamId, String leagueId, String playerId, int salary) {
        this.year = year;
        this.teamId = teamId;
        this.leagueId = leagueId;
        this.playerId = playerId;
        this.salary = salary;
    }
}
