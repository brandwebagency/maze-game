import { Flex, Heading, Text, Button, Box, Card } from "@radix-ui/themes";
import { brand } from "@/constants/brandVariables/brandVariables";
import QRCode from "react-qr-code";
import React from "react";

import { encrypt } from "../../utils/createEncryptedScore";
import { GameOverProps } from "./GameOver.types";

const GameOver: React.FC<GameOverProps> = ({ score, wave, onRestart }) => {
  const qrCode = `https://keychron.iplay.dk/qr-upload-typing-shooter/${
    brand.tenantId
  }/${encrypt(score)}/${score}`;

  return (
    <Flex
      style={{
        position: "absolute",
        inset: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex
        direction="column"
        align="center"
        style={{ textAlign: "center", color: "white" }}
      >
        <img src={brand.logos.large} alt="Logo" width="240" height="52" />

        <Heading
          size="9"
          style={{ marginBottom: "16px", color: "var(--red-9)" }}
        >
          GAME OVER
        </Heading>

        <Text size="6" style={{ marginBottom: "8px" }}>
          Final Score: {score}
        </Text>

        <Text size="5" style={{ marginBottom: "32px" }}>
          You reached Wave {wave}
        </Text>

        <Button
          onClick={onRestart}
          size="4"
          style={{
            fontSize: "24px",
            backgroundColor: "var(--red-9)",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          mb={"6"}
        >
          PLAY AGAIN
        </Button>

        <Card size="3">
          <Flex direction="column" align="center" gap="3">
            <Heading as="h2" size="4" m="0">
              SCAN TO UPLOAD SCORE
            </Heading>

            <Flex align="center" justify="center">
              <Box
                p="3"
                width="fit-content"
                style={{ backgroundColor: "white" }}
              >
                <QRCode size={200} value={qrCode} />
              </Box>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default GameOver;
