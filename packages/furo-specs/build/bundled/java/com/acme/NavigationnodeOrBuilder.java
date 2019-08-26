// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: com.acme.api.proto

package com.acme;

public interface NavigationnodeOrBuilder extends
    // @@protoc_insertion_point(interface_extends:com.acme.api.Navigationnode)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Children of this node
   * </pre>
   *
   * <code>repeated .com.acme.api.Navigationnode children = 11;</code>
   */
  java.util.List<com.acme.Navigationnode> 
      getChildrenList();
  /**
   * <pre>
   * Children of this node
   * </pre>
   *
   * <code>repeated .com.acme.api.Navigationnode children = 11;</code>
   */
  com.acme.Navigationnode getChildren(int index);
  /**
   * <pre>
   * Children of this node
   * </pre>
   *
   * <code>repeated .com.acme.api.Navigationnode children = 11;</code>
   */
  int getChildrenCount();
  /**
   * <pre>
   * Children of this node
   * </pre>
   *
   * <code>repeated .com.acme.api.Navigationnode children = 11;</code>
   */
  java.util.List<? extends com.acme.NavigationnodeOrBuilder> 
      getChildrenOrBuilderList();
  /**
   * <pre>
   * Children of this node
   * </pre>
   *
   * <code>repeated .com.acme.api.Navigationnode children = 11;</code>
   */
  com.acme.NavigationnodeOrBuilder getChildrenOrBuilder(
      int index);

  /**
   * <pre>
   * description of the node
   * </pre>
   *
   * <code>string description = 4;</code>
   */
  java.lang.String getDescription();
  /**
   * <pre>
   * description of the node
   * </pre>
   *
   * <code>string description = 4;</code>
   */
  com.google.protobuf.ByteString
      getDescriptionBytes();

  /**
   * <pre>
   * String representation of the node
   * </pre>
   *
   * <code>string display_name = 2;</code>
   */
  java.lang.String getDisplayName();
  /**
   * <pre>
   * String representation of the node
   * </pre>
   *
   * <code>string display_name = 2;</code>
   */
  com.google.protobuf.ByteString
      getDisplayNameBytes();

  /**
   * <pre>
   * if node has error
   * </pre>
   *
   * <code>bool has_error = 8;</code>
   */
  boolean getHasError();

  /**
   * <pre>
   * icon of the node
   * </pre>
   *
   * <code>string icon = 5;</code>
   */
  java.lang.String getIcon();
  /**
   * <pre>
   * icon of the node
   * </pre>
   *
   * <code>string icon = 5;</code>
   */
  com.google.protobuf.ByteString
      getIconBytes();

  /**
   * <pre>
   * Id of the node
   * </pre>
   *
   * <code>string id = 1;</code>
   */
  java.lang.String getId();
  /**
   * <pre>
   * Id of the node
   * </pre>
   *
   * <code>string id = 1;</code>
   */
  com.google.protobuf.ByteString
      getIdBytes();

  /**
   * <pre>
   * key words of the node
   * </pre>
   *
   * <code>string key_words = 7;</code>
   */
  java.lang.String getKeyWords();
  /**
   * <pre>
   * key words of the node
   * </pre>
   *
   * <code>string key_words = 7;</code>
   */
  com.google.protobuf.ByteString
      getKeyWordsBytes();

  /**
   * <pre>
   * Deeplink information of this node
   * </pre>
   *
   * <code>.furo.Link link = 10;</code>
   */
  boolean hasLink();
  /**
   * <pre>
   * Deeplink information of this node
   * </pre>
   *
   * <code>.furo.Link link = 10;</code>
   */
  furo.LinkOuterClass.Link getLink();
  /**
   * <pre>
   * Deeplink information of this node
   * </pre>
   *
   * <code>.furo.Link link = 10;</code>
   */
  furo.LinkOuterClass.LinkOrBuilder getLinkOrBuilder();

  /**
   * <pre>
   * node is open or not
   * </pre>
   *
   * <code>bool open = 9;</code>
   */
  boolean getOpen();

  /**
   * <pre>
   * Which panel (i.e. view, edit, display) opens the node type (which is defined in property link)
   * </pre>
   *
   * <code>string panel = 6;</code>
   */
  java.lang.String getPanel();
  /**
   * <pre>
   * Which panel (i.e. view, edit, display) opens the node type (which is defined in property link)
   * </pre>
   *
   * <code>string panel = 6;</code>
   */
  com.google.protobuf.ByteString
      getPanelBytes();

  /**
   * <pre>
   * Secondary text of the node
   * </pre>
   *
   * <code>string secondary_text = 3;</code>
   */
  java.lang.String getSecondaryText();
  /**
   * <pre>
   * Secondary text of the node
   * </pre>
   *
   * <code>string secondary_text = 3;</code>
   */
  com.google.protobuf.ByteString
      getSecondaryTextBytes();
}
