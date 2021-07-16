import React from 'react'

export const About = () => {
    return (
        <div className="border">
            <div>
                <label htmlFor="Audit Stream" style="font-size: 150%">Choose Audit Stream</label>
                <select name="AUDIT" id="audit" style="font-size: 120%">
                    <option value="ALL">ALL</option>
                    <option value="PGP Covid Audits">PGP Covid Audits</option>
                    <option value="WCP">WCP</option>
                    <option value="audi">MVA</option>
                    <option value="WCP">WCP</option>
                    <option value="Heatmap">Heatmap</option>
                    <option value="Event Based Audits">Event Based Audits</option>
                    <option value="Escalation Related Audits">Escalation Related Audits</option>

                </select>
                <br><br>
                    <form className="form" id="myForm">
                        <input type="file" style="color:darkblue;font-size: 120%"/>
                    </form>
                    <br><br>
            </div>
            <div className="buttonclass">
                <button className="button" id="uploadbutton">Upload File</button>
            </div>

            <p style="color: black;font-size: 150%;font-weight: bold;padding-left: 20px;padding-top: 50px">Instructions
                for Upload:</p>
            <ul className="b" style="font-size: 180%">
                <li>Format:</li>
                <li></li>
                <li></li>
            </ul>

        </div>
    )
}
