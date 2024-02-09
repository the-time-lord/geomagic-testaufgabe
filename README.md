# Telefonbuch

Diese Testaufgabe wurde mit React + Vite, Material UI und GraphQL implementiert.

## Installation

Führe die folgenden Befehle aus:

1. `npm install` - um die Pakete zu installieren.
2. `npm run server` - um den GraphQL-Server zu starten.
3. `npm run dev` - um den Client zu starten.

## Verwendung

Um die Suchfunktion zu nutzen, gebe einen Namen in das Textfeld ein. Die Suchergebnisse werden sofort gezeigt (die Vorschlagsuche).

## Verbesserungsvorschläge

- Man könnte eine Fuzzy-Suche implementieren, um die Sucheergebnisse zu verbessern.
- Die Anzahl der Objekte in json ist momentan relativ niedrig. Gäbe es mehr Objekte, müsste man auch eine Paginierung (Infinite Scroll, Virtual Scroll) implementieren.
- Die Eigenschaft `position: sticky` könnte zur Suchleiste hinzugefügt werden, damit sie immer im Viewport wäre.
- Es wäre schön, Unitteste für die Utils-Funktion und `resolver` zu schreiben.
