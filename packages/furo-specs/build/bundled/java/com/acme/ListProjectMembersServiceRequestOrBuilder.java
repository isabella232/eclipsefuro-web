// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: com.acme.api.proto

package com.acme;

public interface ListProjectMembersServiceRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:com.acme.api.ListProjectMembersServiceRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   *Partielle Repräsentation fields=id,name // 10
   * </pre>
   *
   * <code>string fields = 1;</code>
   */
  java.lang.String getFields();
  /**
   * <pre>
   *Partielle Repräsentation fields=id,name // 10
   * </pre>
   *
   * <code>string fields = 1;</code>
   */
  com.google.protobuf.ByteString
      getFieldsBytes();

  /**
   * <pre>
   *Sortierung nach feldern
   ***?filter=-completed** um completed absteigend zu bekommen
   ***?filter=completed** um completed aufsteigend zu bekommen
   * </pre>
   *
   * <code>string sort = 2;</code>
   */
  java.lang.String getSort();
  /**
   * <pre>
   *Sortierung nach feldern
   ***?filter=-completed** um completed absteigend zu bekommen
   ***?filter=completed** um completed aufsteigend zu bekommen
   * </pre>
   *
   * <code>string sort = 2;</code>
   */
  com.google.protobuf.ByteString
      getSortBytes();

  /**
   * <pre>
   *Filter
   * </pre>
   *
   * <code>string filter = 3;</code>
   */
  java.lang.String getFilter();
  /**
   * <pre>
   *Filter
   * </pre>
   *
   * <code>string filter = 3;</code>
   */
  com.google.protobuf.ByteString
      getFilterBytes();

  /**
   * <pre>
   *Gewünschte Seite. Tipp: Folge dem HATEOAS next, prev,...
   * </pre>
   *
   * <code>int32 page = 4;</code>
   */
  int getPage();

  /**
   * <pre>
   *Anzahl Elemente pro Seite, maximal sind 99 erlaubt
   * </pre>
   *
   * <code>int32 limit = 5;</code>
   */
  int getLimit();

  /**
   * <pre>
   *Meta für die Anzahl der Elemente der Resource, bei true ist in der Antwort Meta der count aufgeführt
   * </pre>
   *
   * <code>bool count = 6;</code>
   */
  boolean getCount();

  /**
   * <pre>
   *not implemented
   * </pre>
   *
   * <code>string sum = 7;</code>
   */
  java.lang.String getSum();
  /**
   * <pre>
   *not implemented
   * </pre>
   *
   * <code>string sum = 7;</code>
   */
  com.google.protobuf.ByteString
      getSumBytes();

  /**
   * <pre>
   *not implemented (ehemals context)
   * </pre>
   *
   * <code>string view = 8;</code>
   */
  java.lang.String getView();
  /**
   * <pre>
   *not implemented (ehemals context)
   * </pre>
   *
   * <code>string view = 8;</code>
   */
  com.google.protobuf.ByteString
      getViewBytes();

  /**
   * <pre>
   *Query term to search a member
   * </pre>
   *
   * <code>string q = 11;</code>
   */
  java.lang.String getQ();
  /**
   * <pre>
   *Query term to search a member
   * </pre>
   *
   * <code>string q = 11;</code>
   */
  com.google.protobuf.ByteString
      getQBytes();
}
