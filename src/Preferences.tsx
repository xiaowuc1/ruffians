import { Preferences, usePreferences, PreferencesProvider } from "./preferencesHook";
import * as styles from "./Preferences.module.css";

type PreferencesProps = {
    onClose: () => void;
};

export function PreferencesPanel(props: PreferencesProps) {
    const { onClose } = props;
    const [preferences, setPreferences] = usePreferences();

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
                <h2>Preferences</h2>
                <div className={styles.option}>
                    <input
                        type="checkbox"
                        id="fourColorSuits"
                        checked={preferences.fourColorSuits}
                        onChange={(e) => setPreferences({ fourColorSuits: e.target.checked })}
                    />
                    <label htmlFor="fourColorSuits">Four-color suits</label>
                    <p className={styles.description}>
                        Display each suit in a different color (clubs: blue, diamonds: orange, hearts: red, spades:
                        gray) using Balatro Joker colors instead of traditional two colors.
                    </p>
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export { usePreferences, PreferencesProvider };
export type { Preferences };
